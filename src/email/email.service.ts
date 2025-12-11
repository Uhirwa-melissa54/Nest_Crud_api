import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';
import { Transporter } from 'nodemailer';


@Injectable()
export class EmailService{
    private transporter:Transporter;
    constructor(){
        this.transporter=nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: 'uhirwamelissa@gmail.com', pass: 'uhirwashami' },
        })
    }
    async sendWelcomeEmail(to:string, name:string){
        await this.transporter.sendMail({
      from: '"NeverKnow" <uhirwamelissa@gmail.com>',
      to,
      subject: 'Welcome!',
      text: `Hi ${name}, thanks for registering!`,
      html: `<b>Hi ${name}</b>, thanks for registering!`,
        })

    }
}