import { Module } from "@nestjs/common";
import { AuthModule } from "./Auth/auth.module";
import { UserModule } from './user/user.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
    imports:[AuthModule, UserModule, BookmarksModule]
})
export class AppModule{}