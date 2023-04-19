import { Controller, Get, Post, Body } from '@nestjs/common';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleRegisterDTO } from 'src/dto/vehicle.register.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

    @Get('findAll')
    async findAllVehicles(): Promise<Vehicle[]>{
        return this.vehicleService.findAllVehicles()
    }

    @Post()
    async registerVehicle(@Body() data: VehicleRegisterDTO): Promise<any>{
      return this.vehicleService.registerVehicle(data)
    }
}