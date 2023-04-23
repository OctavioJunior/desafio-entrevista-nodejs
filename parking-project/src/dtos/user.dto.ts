import { IsNotEmpty, Matches } from 'class-validator';
import { MessageHelper } from '../helpers/message.helper';
import { RegexHelper } from '../helpers/regex.helper';
export class UserRegisterDTO {
  @IsNotEmpty({ message: MessageHelper.EMAIL_VALID })
  email: string;

  @IsNotEmpty()
  @Matches(RegexHelper.password, {
    message: MessageHelper.PASSWORD_VALID,
  })
  password: string;
}
