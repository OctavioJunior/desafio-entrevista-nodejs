import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbconnection/database.module';
import { userProviders } from '../providers/user.providers';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
})
export class UserModule {}
