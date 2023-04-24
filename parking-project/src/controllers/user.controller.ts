import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decoratos';
import { UserRegisterDTO } from 'src/dtos/user.dto';
import { UserType } from 'src/enum/userType.enum';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
@ApiTags('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todos usuários' })
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':email')
  @ApiOperation({ summary: 'Busca um usuário pelo email' })
  async findOneUser(@Param('email') email: string): Promise<any> {
    return this.userService.findOneUser(email);
  }

  @Post()
  @ApiOperation({ summary: 'Cria um usuário' })
  async registerUser(@Body() data: UserRegisterDTO): Promise<any> {
    return this.userService.registerUser(data);
  }

  @Roles(UserType.Admin)
  @Delete(':email')
  @ApiOperation({ summary: 'Deleta um usuário pelo email' })
  async deleteOneUser(@Param('email') email: string): Promise<any> {
    return this.userService.deleteOneUser(email);
  }
}
