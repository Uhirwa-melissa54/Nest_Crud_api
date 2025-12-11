import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailService{
    private transporter;
    constructor(){
//what can i not do like  this: private transporter: nodemailer like i did before for prisma service
        this.transporter=nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: 'uhirwamelissa@gmail.com', pass: 'uhirwashami' },
        })
    }
}