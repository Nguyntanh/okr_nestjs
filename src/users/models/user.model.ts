import { ApiProperty, ApiHideProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { Post } from "../../posts/models/post.model";
import { BaseModel } from "../../common/models/base.model";

export class User extends BaseModel {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false, nullable: true })
  fullName?: string;

  @ApiProperty({ enum: ["ADMIN", "MANAGER", "USER"] })
  role: string;

  @ApiProperty({
    type: () => Post,
    isArray: true,
    required: false,
    nullable: true,
  })
  posts?: Post[] | null;

  @ApiHideProperty()
  passwordHash: string;
}
