import { Inject, Injectable } from '@nestjs/common';
import { UserRegisterDTO } from 'src/dtos/user.dto';
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

  async findOneUser(email: string): Promise<any> {
    return this.userRepository.findOne({ where: { email } });
  }

  async registerUser(data: UserRegisterDTO): Promise<any> {
    const newUser = this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return { status: true, mensagem: 'Usuário cadastrado!' };
  }

  async deleteOneUser(email: string): Promise<any> {
    await this.userRepository.delete({ email });
    return { status: true, mensagem: 'Usuario removido!' };
  }
}
