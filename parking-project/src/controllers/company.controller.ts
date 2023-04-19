import { Controller, Get } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

    @Get('findAll')
    async findAllCompanies(): Promise<Company[]>{
        return this.companyService.findAllCompanies()}
}