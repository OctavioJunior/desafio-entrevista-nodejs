import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { CompanyRegisterDTO, CompanyUpdateDTO } from 'src/dtos/company.dto';
import { VehicleService } from './vehicle.service';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Company>,
    private vehicleService: VehicleService,
  ) {}

  async findAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find()
  }

  async findOneCompany(id: number): Promise<any>{
    return this.companyRepository.findOne({where: {id}})
  }

  async registerCompany(data: CompanyRegisterDTO): Promise<any> {
    const newCompany = this.companyRepository.create(data)
    await this.companyRepository.save(newCompany)
    return { status: true, mensagem: 'Empresa cadastrada!' }
  }

  async updateCompany(id: number, data: CompanyUpdateDTO): Promise<any>{
    await this.companyRepository.update({id}, {...data})
    return { status: true, mensagem: 'Empresa atualizada!' }
  }

  async deleteOneCompany(id: number): Promise<any>{
    await this.companyRepository.delete({id})
    return { status: true, mensagem: 'Empresa removida!' }
  }
}