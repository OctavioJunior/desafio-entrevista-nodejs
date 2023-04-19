import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbconnection/database.module';
import { vehicleProviders } from './vehicle.providers';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleController],
  providers: [
    ...vehicleProviders,
    VehicleService,
  ],
})
export class VehicleModule {}