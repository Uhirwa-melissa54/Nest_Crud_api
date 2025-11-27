import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/dtos/AuthDto";

@Controller("/auth")

export class AuthController{
    constructor(private authService:AuthService){}
    @Post("signup")
    signUp(@Body() dto:AuthDto){
        return this.authService.signUp(dto)

    }
    @Post("login")
    signIn (@Body() dto:AuthDto){
        return this.authService.signin(dto)
    }
}