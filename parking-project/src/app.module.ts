import { Module } from '@nestjs/common';
import { DatabaseModule } from './dbconnection/database.module';
import { CompanyModule } from './modules/company.module';
import { UserModule } from './modules/user.module';
import { VehicleModule } from './modules/vehicle.module';

@Module({
  imports: [DatabaseModule, VehicleModule, CompanyModule, UserModule],
})
export class AppModule {}
