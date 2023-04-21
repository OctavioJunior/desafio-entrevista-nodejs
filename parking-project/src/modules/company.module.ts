import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbconnection/database.module';
import { companyProviders } from '../providers/company.providers';
import { CompanyService } from '../services/company.service';
import { CompanyController } from '../controllers/company.controller';
import { VehicleModule } from './vehicle.module';
import { VehicleController } from 'src/controllers/vehicle.controller';
import { vehicleProviders } from 'src/providers/vehicle.providers';
import { VehicleService } from 'src/services/vehicle.service';

@Module({
  imports: [DatabaseModule, VehicleModule],
  controllers: [CompanyController,VehicleController],
  providers: [
    ...companyProviders, ...vehicleProviders,
    CompanyService, VehicleService,
  ],
})
export class CompanyModule {}