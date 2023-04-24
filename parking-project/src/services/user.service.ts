import { Inject, Injectable, NotFoundException } from '@nestjs/common';
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
    const userFinded = await this.userRepository.findOne({ where: { email } });

    if (!userFinded) {
      throw new NotFoundException(`Email: ${email} não encontrado!`);
    }
    console.log(userFinded);
    return userFinded;
  }

  async registerUser(data: UserRegisterDTO): Promise<any> {
    const userExist = await this.findOneUser(data.email).catch(() => undefined);
    if (userExist) {
      return 'Email já cadastrado!';
    }
    const newUser = this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return { status: true, mensagem: 'Usuário cadastrado!' };
  }

  async deleteOneUser(email: string): Promise<any> {
    await this.userRepository.delete({ email });
    return { status: true, mensagem: 'Usuario removido!' };
  }
}
