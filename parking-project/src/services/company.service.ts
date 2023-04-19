import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { CompanyRegisterDTO } from 'src/dto/company.register.dto';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private companyRepository: Repository<Company>,
  ) {}

  async findAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async registerCompany(data: CompanyRegisterDTO): Promise<any>{
    let company = new Company()

    company.companyName = data.companyName
    company.cnpj = data.cnpj
    company.companyAddress = data.companyAddress
    company.companyPhone = data.companyPhone
    company.numberOfCarParking = data.numberOfCarParking
    company.numberOfMotorcycleParking = data.numberOfMotorcycleParking
    return this.companyRepository.save(company)
    .then((result)=>{
      return <any>{
        status: true,
        mensagem: 'Empresa cadastrada!'
      }
    })
    .catch((error)=>{
      return <any>{
        status: false,
        mensagem: 'Erro ao cadastrar empresa!'
      }
    })

  }
}