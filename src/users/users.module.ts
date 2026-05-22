import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { PasswordService } from "../auth/password.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService, PasswordService],
})
export class UsersModule {}
