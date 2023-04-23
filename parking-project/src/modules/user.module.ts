import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { DatabaseModule } from '../dbconnection/database.module';
import { userProviders } from '../providers/user.providers';
import { UserService } from '../services/user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
