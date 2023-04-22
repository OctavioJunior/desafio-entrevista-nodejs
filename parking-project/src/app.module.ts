import { Module } from '@nestjs/common';
import { VehicleModule } from './modules/vehicle.module';
import { CompanyModule } from './modules/company.module';
import { DatabaseModule } from './dbconnection/database.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [VehicleModule, CompanyModule, DatabaseModule, UserModule],
})
export class AppModule {}
