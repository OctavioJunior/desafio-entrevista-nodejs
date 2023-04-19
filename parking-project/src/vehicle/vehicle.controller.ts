import { Controller, Get } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle.entity';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

    @Get('findAll')
    async findAllVehicles(): Promise<Vehicle[]>{
        return this.vehicleService.findAllVehicles()
    }
}