import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRegisterDTO, UserUpdateDTO } from 'src/dtos/user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':name')
  async findOneUser(@Param('name') userName: string): Promise<any> {
    return this.userService.findOneUser(userName);
  }

  @Post()
  async registerUser(@Body() data: UserRegisterDTO): Promise<any> {
    return this.userService.registerUser(data);
  }

  @Put(':name')
  async updateUser(
    @Param('name') name: string,
    data: UserUpdateDTO,
  ): Promise<any> {
    return this.userService.updateUser(name, data);
  }

  @Delete(':name')
  async deleteOneUser(@Param('name') name: string): Promise<any> {
    return this.userService.deleteOneUser(name);
  }
}
