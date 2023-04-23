import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserReturnDTO } from 'src/dtos/user.dto';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() login: LoginDTO): Promise<UserReturnDTO> {
    return new UserReturnDTO(await this.authService.login(login));
  }
}
