import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
export class loginPayloadDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  typeUser: number;

  constructor(user: User) {
    this.id = user.id;
    this.typeUser = user.typeUser;
  }
}
