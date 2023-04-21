import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleRegisterDTO, VehicleUpdateDTO } from 'src/dtos/vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async findOneVehicle(id: number): Promise<any>{
    return this.vehicleRepository.findOne({where: {id}})
  }

  async registerVehicle(data: VehicleRegisterDTO): Promise<any>{    
    const newVehicle = this.vehicleRepository.create(data)
    await this.vehicleRepository.save(newVehicle)
    return { status: true, mensagem: 'Veiculo cadastrado!' }
  }

  async updateVehicle(id: number, data: VehicleUpdateDTO): Promise<any>{
    await this.vehicleRepository.update({id}, {...data})
    return { status: true, mensagem: 'Veiculo atualizado!' }
  }

  async deleteOneVehicle (id: number): Promise<any>{
    await this.vehicleRepository.delete({id})
    return { status: true, mensagem: 'Veiculo removido!' }
  }

}