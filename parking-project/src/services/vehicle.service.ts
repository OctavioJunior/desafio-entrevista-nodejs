import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleRegisterDTO } from 'src/dto/vehicle.register.dto';
import { VehicleUpdateDTO } from 'src/dto/vehicle.update.dto';

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
    
    const newVehicle = this.vehicleRepository.create({
      ...data,
    })

    return this.vehicleRepository.save(newVehicle)
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

  async updateVehicle(id: number, data: VehicleUpdateDTO): Promise<any>{
    
    return this.vehicleRepository.update({id}, {...data})
    .then((result)=>{
      return <any>{
        status: true,
        mensagem: 'Veiculo atualizado!'
      }
    })
    .catch((error)=>{
      return <any>{
        status: false,
        mensagem: 'Erro ao atualiza veiculo!'
      }
    })
  }

}