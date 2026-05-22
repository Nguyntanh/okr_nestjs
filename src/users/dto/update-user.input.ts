import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserInput {
  @ApiProperty()
  fullName: string;
}
