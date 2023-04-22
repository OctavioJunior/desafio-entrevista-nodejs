import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleService } from '../services/vehicle.service';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleRegisterDTO, VehicleUpdateDTO } from 'src/dtos/vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleService.findAllVehicles();
  }

  @Get(':plate')
  async findOneVehicle(@Param('plate') vehiclePlate: string): Promise<any> {
    return this.vehicleService.findOneVehicle(vehiclePlate);
  }

  @Post()
  async registerVehicle(@Body() data: VehicleRegisterDTO): Promise<any> {
    return this.vehicleService.registerVehicle(data);
  }

  @Put(':id')
  async updateVehicle(
    @Param('id') id: number,
    @Body() data: VehicleUpdateDTO,
  ): Promise<any> {
    return this.vehicleService.updateVehicle(id, data);
  }

  @Delete(':id')
  async deleteOneVehicle(@Param('id') id: number): Promise<any> {
    return this.vehicleService.deleteOneVehicle(id);
  }
}
