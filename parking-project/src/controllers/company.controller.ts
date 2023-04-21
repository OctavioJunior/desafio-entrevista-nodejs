import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';
import { CompanyRegisterDTO, CompanyUpdateDTO } from 'src/dtos/company.dto';
import { VehicleService } from 'src/services/vehicle.service';

@Controller('company')
export class CompanyController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly vehicleService: VehicleService,
    ) {}

    @Get()
    async findAllCompanies(): Promise<Company[]>{
        return this.companyService.findAllCompanies()
    }

    @Get(':id')
    async findOneCompany(@Param('id') id: number): Promise<any>{
      return this.companyService.findOneCompany(id)
    }

    @Post()
    async registerCompany(@Body() data: CompanyRegisterDTO): Promise<any>{
      return this.companyService.registerCompany(data)
    }

    @Put(':id')
    async updateCompany(@Param('id') id: number, @Body() data: CompanyUpdateDTO): Promise<any>{
      return this.companyService.updateCompany(id, data)
    }

    @Delete(':id')
    async deleteOneCompany(@Param('id') id: number): Promise<any>{
      return this.companyService.deleteOneCompany(id)
    }
}