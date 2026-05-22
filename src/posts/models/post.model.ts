import { ApiProperty } from "@nestjs/swagger";
import { User } from "../../users/models/user.model";
import { BaseModel } from "../../common/models/base.model";

export class Post extends BaseModel {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  content?: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty({
    type: () => User,
    required: false,
    nullable: true,
  })
  author?: User | null;
}
