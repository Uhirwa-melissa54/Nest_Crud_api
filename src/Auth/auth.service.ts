import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dtos/AuthDto";
import * as argon2 from "argon2";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

 
  async signUp(dto: AuthDto) {
    try {
      const hashedPassword = await argon2.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashedPassword,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });

      const tokens = await this.getTokens(user.id, user.email);
     

      return tokens;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Email already registered");
        }
      }
    }
  }

 
  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new ForbiddenException("Email not registered");

    const pwMatches = await argon2.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException("Invalid credentials");

    const tokens = await this.getTokens(user.id, user.email);
  

    return tokens;
  }

  async getTokens(userId: number, email: string) {
    const jwtSecret = this.config.get("JWT_SECRET");
    const rtSecret = this.config.get("JWT_SECRET");

    const payload = { sub: userId, email };

    const accessToken = await this.jwt.signAsync(payload, {
      expiresIn: "15m",
      secret: jwtSecret,
    });

    const refreshToken = await this.jwt.signAsync(payload, {
      expiresIn: "7d",
      secret: rtSecret,
    });

    return { accessToken, refreshToken };
  }



  
}
