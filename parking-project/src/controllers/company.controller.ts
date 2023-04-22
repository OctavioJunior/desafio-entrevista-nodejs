/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entities/company.entity';
import CompanyRegisterDTO, {
  CompanyUpdateDTO,
  CompanyParkingDTO,
} from 'src/dtos/company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async findAllCompanies(): Promise<Company[]> {
    return this.companyService.findAllCompanies();
  }

  @Get(':name')
  async findOneCompany(@Param('name') companyName: string): Promise<any> {
    return this.companyService.findOneCompany(companyName);
  }

  @Post()
  async registerCompany(@Body() data: CompanyRegisterDTO): Promise<any> {
    return this.companyService.registerCompany(data);
  }

  @Put(':id')
  async updateCompany(
    @Param('id') id: number,
    @Body() data: CompanyUpdateDTO,
  ): Promise<any> {
    return this.companyService.updateCompany(id, data);
  }

  @Delete(':id')
  async deleteOneCompany(@Param('id') id: number): Promise<any> {
    return this.companyService.deleteOneCompany(id);
  }

  @Put('vehicleIn/:name/:plate')
  async vehicleIn(
    @Param('name') name: string,
    @Param('plate') plate: string,
  ): Promise<any> {
    return this.companyService.vehicleIn(name, plate);
  }

  @Put('vehicleOut/:name/:plate')
  async vehicleOut(
    @Param('name') name: string,
    @Param('plate') plate: string,
  ): Promise<any> {
    return this.companyService.vehicleOut(name, plate);
  }
}
