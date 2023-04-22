import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbconnection/database.module';
import { vehicleProviders } from '../providers/vehicle.providers';
import { VehicleService } from '../services/vehicle.service';
import { VehicleController } from '../controllers/vehicle.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VehicleController],
  providers: [...vehicleProviders, VehicleService],
})
export class VehicleModule {}
