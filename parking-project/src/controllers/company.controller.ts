import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import CompanyRegisterDTO, { CompanyUpdateDTO } from 'src/dtos/company.dto';
import { UserType } from 'src/enum/userType.enum';
import { Roles } from '../decorators/roles.decoratos';
import { Company } from '../entities/company.entity';
import { CompanyService } from '../services/company.service';

@Roles(UserType.User, UserType.Admin)
@Controller('company')
@ApiTags('empresas')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todas empresas cadastradas' })
  async findAllCompanies(): Promise<Company[]> {
    return this.companyService.findAllCompanies();
  }

  @Get(':name')
  @ApiOperation({ summary: 'Busca empresa pelo nome' })
  async findOneCompany(@Param('name') companyName: string): Promise<any> {
    return this.companyService.findOneCompany(companyName);
  }

  @Post()
  @ApiOperation({ summary: 'Cadastra uma empresa' })
  async registerCompany(@Body() data: CompanyRegisterDTO): Promise<any> {
    return this.companyService.registerCompany(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza empresa pelo id' })
  async updateCompany(
    @Param('id') id: number,
    @Body() data: CompanyUpdateDTO,
  ): Promise<any> {
    return this.companyService.updateCompany(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta empresa pelo id' })
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
