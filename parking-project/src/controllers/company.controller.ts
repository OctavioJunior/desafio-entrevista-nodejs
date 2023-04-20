import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';
import { CompanyRegisterDTO } from 'src/dto/company.register.dto';
import { CompanyUpdateDTO } from 'src/dto/company.update.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

    @Get('findAll')
    async findAllCompanies(): Promise<Company[]>{
        return this.companyService.findAllCompanies()
    }

    @Post()
    async registerCompany(@Body() data: CompanyRegisterDTO): Promise<any>{
      return this.companyService.registerCompany(data)
    }

    @Put(':id')
    async updateCompany(@Param('id') id: number, @Body() data: CompanyUpdateDTO): Promise<any>{
      return this.companyService.updateCompany(id, data)
    }
}