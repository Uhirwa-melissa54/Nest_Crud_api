import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dtos/AuthDto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    signUp(dto:AuthDto){
        this.prisma.create({
                 email: dto.email,
        password: dto.password,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
        )


    }
}