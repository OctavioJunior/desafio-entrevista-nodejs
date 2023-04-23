import { Inject, Injectable } from '@nestjs/common';
import { UserRegisterDTO, UserUpdateDTO } from 'src/dtos/user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneUser(userName: string): Promise<any> {
    return this.userRepository.findOne({ where: { userName } });
  }

  async registerUser(data: UserRegisterDTO): Promise<any> {
    const newUser = this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return { status: true, mensagem: 'Usuário cadastrado!' };
  }

  async updateUser(userName: string, data: UserUpdateDTO): Promise<any> {
    await this.userRepository.update({ userName }, { ...data });
    return { status: true, mensagem: 'Usuario atualizado!' };
  }

  async deleteOneUser(userName: string): Promise<any> {
    await this.userRepository.delete({ userName });
    return { status: true, mensagem: 'Usuario removido!' };
  }
}
