import { User } from 'src/entities/user.entity';
export class loginPayloadDTO {
  id: number;
  typeUser: number;

  constructor(user: User) {
    this.id = user.id;
    this.typeUser = user.type;
  }
}
