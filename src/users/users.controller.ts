import { Controller, Get, Patch, Body, UseGuards } from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { UserEntity } from "../common/decorators/user.decorator";
import { SwgAuthGuard } from "../auth/swg-auth.guard";
import { User } from "./models/user.model";
import { UpdateUserInput } from "./dto/update-user.input";
import { ChangePasswordInput } from "./dto/change-password.input";

@ApiTags("users")
@Controller("users")
@UseGuards(SwgAuthGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get("me")
  @ApiOperation({ summary: "Lấy thông tin người dùng hiện tại" })
  @ApiResponse({ status: 200, type: User })
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @Patch("profile")
  @ApiOperation({ summary: "Cập nhật thông tin cá nhân" })
  @ApiResponse({ status: 200, type: User })
  async updateUser(
    @UserEntity() user: User,
    @Body() newUserData: UpdateUserInput,
  ) {
    return this.usersService.updateUser(user.id, newUserData);
  }

  @Patch("change-password")
  @ApiOperation({ summary: "Thay đổi mật khẩu" })
  @ApiResponse({ status: 200, type: User })
  async changePassword(
    @UserEntity() user: User,
    @Body() changePassword: ChangePasswordInput,
  ) {
    // Lưu ý: passwordHash được lấy từ UserEntity (nếu strategy JWT trả về đầy đủ object)
    return this.usersService.changePassword(
      user.id,
      user.passwordHash,
      changePassword,
    );
  }
}
