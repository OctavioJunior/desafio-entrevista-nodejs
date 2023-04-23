import { UserReturnDTO } from 'src/dtos/user.dto';

export interface ReturnLoginDTO {
  user: UserReturnDTO;
  accesToken: string;
}
