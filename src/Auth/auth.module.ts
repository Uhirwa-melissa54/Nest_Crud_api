import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controllers";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { EmailService } from "src/email/email.service";
import { EmailModule } from "src/email/email.module";

@Module({
    imports:[PrismaModule,JwtModule,EmailModule],
    controllers:[AuthController],
    providers:[AuthService]
})
export class AuthModule{}