import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }
}