import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './routes/vehicle.module';

@Module({
  imports: [
    VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
