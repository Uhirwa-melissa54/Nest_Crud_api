import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dtos/AuthDto";
import * as argon2 from 'argon2';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    async signUp(dto:AuthDto){
    const hashedPassword= await argon2.hash(dto.password)
        const user = await this.prisma.create({
                 email: dto.email,
        password: hashedPassword,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
        )


    }
}