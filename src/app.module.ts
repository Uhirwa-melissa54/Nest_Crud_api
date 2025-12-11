import { Module } from "@nestjs/common";
import { AuthModule } from "./Auth/auth.module";
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from "@nestjs/config";
import { EmailModule } from './email/email.module';

@Module({
    imports:[AuthModule, UserModule, BookmarksModule, PrismaModule,ConfigModule.forRoot({
        isGlobal:true,
    }), EmailModule]
})
export class AppModule{}