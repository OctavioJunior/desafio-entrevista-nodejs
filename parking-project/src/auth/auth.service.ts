import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserReturnDTO } from 'src/dtos/user.dto';
import { User } from 'src/entities/user.entity';
import { MessageHelper } from 'src/helpers/message.helper';
import { UserService } from './../services/user.service';
import { LoginDTO } from './dto/login.dto';
import { loginPayloadDTO } from './dto/loginPayload.dto';
import { ReturnLoginDTO } from './dto/returnLogin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(login: LoginDTO): Promise<ReturnLoginDTO> {
    const user: User | undefined = await this.userService
      .findOneUser(login.email)
      .catch(() => undefined);

    const isMatch = await compare(login.password, user?.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException(MessageHelper.EMAIL_OR_PASSWORD_WRONG);
    }

    return {
      accesToken: this.jwtService.sign({ ...new loginPayloadDTO(user) }),
      user: new UserReturnDTO(user),
    };
  }
}
