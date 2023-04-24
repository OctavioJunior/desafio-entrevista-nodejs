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
    return { status: true, mensagem: 'Empresa cadastrada!' };
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
    const findedVehicle = await this.vehicleRepository.findOne({
      where: { vehiclePlate },
    });

    if (!findedVehicle) {
      return 'Veículo não cadastrado, realize o cadastro!';
    }

    if (findedVehicle.vehicleType == 'Carro') {
      if (findedCompany.numberOfCarParking >= 0) {
        findedCompany.numberOfCarParking--;
        this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.numberOfCarParking} vagas para carro!`;
      } else {
        return 'Sem vagas para carros disponivel';
      }
    } else {
      if (findedCompany.numberOfMotorcycleParking >= 0) {
        console.log(findedCompany);
        findedCompany.numberOfMotorcycleParking--;
        this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.numberOfMotorcycleParking} vagas para moto!`;
      } else {
        return 'Sem vagas para motos disponivel';
      }
    }
  }

  async vehicleOut(vehiclePlate: string, companyName: string): Promise<any> {
    const findedCompany = await this.companyRepository.findOne({
      where: { companyName },
    });
    const findedVehicle = await this.vehicleRepository.findOne({
      where: { vehiclePlate },
    });
    console.log(findedVehicle);
    console.log(findedCompany);

    if (!findedVehicle) {
      return 'Veículo não encontrado!';
    }

    if (findedVehicle.vehicleType == 'Carro') {
      if (findedCompany.numberOfCarParking <= 30) {
        findedCompany.numberOfCarParking++;
        this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.numberOfCarParking} vagas para carro!`;
      } else {
        return 'Todas vagas para carros disponiveis';
      }
    } else {
      if (findedCompany.numberOfMotorcycleParking <= 30) {
        console.log(findedCompany);
        findedCompany.numberOfMotorcycleParking++;
        this.companyRepository.save(findedCompany);
        return `Veículo cadastrado, restam ${findedCompany.numberOfMotorcycleParking} vagas para moto!`;
      } else {
        return 'Todas vagas para motos disponiveis';
      }
    }
  }
}
