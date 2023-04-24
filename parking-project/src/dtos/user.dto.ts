import { IsNotEmpty, Matches } from 'class-validator';
import { User } from 'src/entities/user.entity';
import { MessageHelper } from '../helpers/message.helper';
import { RegexHelper } from '../helpers/regex.helper';
import { ApiProperty } from '@nestjs/swagger';
export class UserRegisterDTO {
  @IsNotEmpty({ message: MessageHelper.EMAIL_VALID })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @Matches(RegexHelper.password, {
    message: MessageHelper.PASSWORD_VALID,
  })
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @ApiProperty()
  typeUser: number;
}

export class UserReturnDTO {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;

  constructor(User: User) {
    this.email = User.email;
    this.password = User.password;
  }
}
