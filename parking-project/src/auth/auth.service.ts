import { Injectable, NotFoundException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { UserService } from './../services/user.service';
import { LoginDTO } from './dto/login.dto';
import { MessageHelper } from 'src/helpers/message.helper';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(login: LoginDTO): Promise<User> {
    const user: User | undefined = await this.userService
      .findOneUser(login.email)
      .catch(() => undefined);

    const isMatch = await compare(login.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException(MessageHelper.EMAIL_OR_PASSWORD_WRONG);
    }

    return user;
  }
}
