import { IsEmail, IsNotEmpty } from "class-validator"

export class AuthDto{
@IsEmail()
@IsNotEmpty()   
email:String
@IsNotEmpty()
password:String
firstName:String
lastName:String
}