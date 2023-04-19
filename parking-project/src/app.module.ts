import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './routes/vehicle.module';
import { CompanyModule } from './routes/company.module';

@Module({
  imports: [
    VehicleModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
