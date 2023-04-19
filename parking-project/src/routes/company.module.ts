import { Module } from '@nestjs/common';
import { DatabaseModule } from '../dbconnection/database.module';
import { companyProviders } from '../providers/company.providers';
import { CompanyService } from '../services/company.service';
import { CompanyController } from '../controllers/company.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [
    ...companyProviders,
    CompanyService,
  ],
})
export class CompanyModule {}