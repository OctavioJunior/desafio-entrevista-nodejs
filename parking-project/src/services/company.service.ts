import { Inject, Injectable } from '@nestjs/common';
import CompanyRegisterDTO, { CompanyUpdateDTO } from 'src/dtos/company.dto';
import { Vehicle } from 'src/entities/vehicle.entity';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { VehicleService } from './vehicle.service';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Company>,
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: Repository<Vehicle>,
    private vehicleService: VehicleService,
  ) {}

  async findAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOneCompany(companyName: string): Promise<any> {
    return this.companyRepository.findOne({ where: { companyName } });
  }

  async registerCompany(data: CompanyRegisterDTO): Promise<any> {
    const newCompany = this.companyRepository.create(data);
    await this.companyRepository.save(newCompany);
    await this.parkingSlot(newCompany);
    return { status: true, mensagem: 'Empresa cadastrada!' };
  }

  async parkingSlot(data: Company): Promise<any> {
    await this.findOneCompany(data.companyName);
    const carSlot = data.numberOfCarParking;
    data.availableCarSlot = carSlot;
    const motorcycleSlot = data.numberOfMotorcycleParking;
    data.availableMotorcycleSlot = carSlot;
    return this.companyRepository.save(data);
  }

  async updateCompany(id: number, data: CompanyUpdateDTO): Promise<any> {
    await this.companyRepository.update({ id }, { ...data });
    return { status: true, mensagem: 'Empresa atualizada!' };
  }

  async deleteOneCompany(id: number): Promise<any> {
    await this.companyRepository.delete({ id });
    return { status: true, mensagem: 'Empresa removida!' };
  }

  async vehicleIn(vehiclePlate: string, companyName: string): Promise<any> {
    const findedCompany = await this.companyRepository.findOne({
      where: { companyName },
    });
    console.log(findedCompany);
    if (!findedCompany) {
      return 'Empresa não encontrada!';
    }

    const findedVehicle = await this.vehicleRepository.findOne({
      where: { vehiclePlate },
    });

    if (!findedVehicle) {
      return 'Veículo não cadastrado, realize o cadastro!';
    }

    if (findedVehicle.vehicleType == 'Carro') {
      if (findedCompany.availableCarSlot > 0) {
        findedCompany.availableCarSlot--;
        await this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.availableCarSlot} vagas para carro!`;
      } else {
        return 'Sem vagas para carros disponivel';
      }
    }

    if (findedVehicle.vehicleType == 'Moto') {
      if (findedCompany.availableMotorcycleSlot > 0) {
        findedCompany.availableMotorcycleSlot--;
        await this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.availableMotorcycleSlot} vagas para moto!`;
      } else {
        return 'Sem vagas para motos disponivel';
      }
    }
  }

  async vehicleOut(vehiclePlate: string, companyName: string): Promise<any> {
    const findedCompany = await this.companyRepository.findOne({
      where: { companyName },
    });

    if (!findedCompany) {
      return 'Empresa não encontrada!';
    }

    const findedVehicle = await this.vehicleRepository.findOne({
      where: { vehiclePlate },
    });

    if (!findedVehicle) {
      return 'Veículo não cadastrado, realize o cadastro!';
    }

    if (findedVehicle.vehicleType == 'Carro') {
      if (findedCompany.availableCarSlot < findedCompany.numberOfCarParking) {
        findedCompany.availableCarSlot++;
        await this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.availableCarSlot} vagas para carro!`;
      } else {
        return 'Todas vagas para carro estão vazias';
      }
    }

    if (findedVehicle.vehicleType == 'Moto') {
      if (
        findedCompany.availableMotorcycleSlot <
        findedCompany.numberOfMotorcycleParking
      ) {
        findedCompany.availableMotorcycleSlot++;
        await this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.availableMotorcycleSlot} vagas para moto!`;
      } else {
        return 'Todas vagas para moto estão vazias';
      }
    }
  }
}
