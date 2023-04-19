import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleRegisterDTO } from 'src/dto/vehicle.register.dto';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async registerVehicle(data: VehicleRegisterDTO): Promise<any>{
    let vehicle = new Vehicle()

    vehicle.vehicleBrand = data.vehicleBrand
    vehicle.vehicleColor = data.vehicleColor
    vehicle.vehicleModel = data.vehicleModel
    vehicle.vehiclePlate = data.vehiclePlate
    vehicle.vehicleType = data.vehicleType
    return this.vehicleRepository.save(vehicle)
    .then((result)=>{
      return <any>{
        status: true,
        mensagem: 'Veiculo cadastrado!'
      }
    })
    .catch((error)=>{
      return <any>{
        status: false,
        mensagem: 'Erro ao cadastrar veiculo!'
      }
    })

  }
}