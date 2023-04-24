import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decoratos';
import { VehicleRegisterDTO, VehicleUpdateDTO } from 'src/dtos/vehicle.dto';
import { UserType } from 'src/enum/userType.enum';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleService } from '../services/vehicle.service';

@Roles(UserType.User, UserType.Admin)
@Controller('vehicle')
@ApiTags('veiculos')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todos os veículos' })
  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleService.findAllVehicles();
  }

  @Get(':plate')
  @ApiOperation({ summary: 'Busca um veículo pela placa' })
  async findOneVehicle(@Param('plate') vehiclePlate: string): Promise<any> {
    return this.vehicleService.findOneVehicle(vehiclePlate);
  }

  @Post()
  @ApiOperation({ summary: 'Registra um veiculo' })
  async registerVehicle(@Body() data: VehicleRegisterDTO): Promise<any> {
    return this.vehicleService.registerVehicle(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza veiculo pela placa' })
  async updateVehicle(
    @Param('id') id: number,
    @Body() data: VehicleUpdateDTO,
  ): Promise<any> {
    return this.vehicleService.updateVehicle(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta veiculo pela placa' })
  async deleteOneVehicle(@Param('id') id: number): Promise<any> {
    return this.vehicleService.deleteOneVehicle(id);
  }
}
