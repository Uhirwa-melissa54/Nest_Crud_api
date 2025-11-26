import { Module } from "@nestjs/common";
import { AuthModule } from "./Auth/auth.module";
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports:[AuthModule, UserModule, BookmarksModule, PrismaModule]
})
export class AppModule{}