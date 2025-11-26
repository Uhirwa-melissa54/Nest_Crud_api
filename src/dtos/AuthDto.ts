import { IsEmail, IsNotEmpty } from "class-validator"

class AuthDto{
@IsEmail()
@IsNotEmpty()   
email:String
@IsNotEmpty()
password:String
firstName:String
lastName:String
}