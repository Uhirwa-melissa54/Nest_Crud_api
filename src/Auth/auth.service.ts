import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dtos/AuthDto";
import * as argon2 from 'argon2';
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService{
    constructor(private prisma:PrismaService){}
    async signUp(dto:AuthDto){
        try{
    const hashedPassword= await argon2.hash(dto.password)
        const user = await this.prisma.user.create({
               data:{ email: dto.email,
        password: hashedPassword,
        firstName: dto.firstName,
        lastName: dto.lastName,
               }
      },
        )
return user;
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError)
        if(error.code=='P2002'){
            throw new ForbiddenException(
                "Email already registred",
            )
        }
    }

    }
}

