import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './dbconnection/database.module';
import { RolesGuard } from './guards/roles.guard';
import { CompanyModule } from './modules/company.module';
import { UserModule } from './modules/user.module';
import { VehicleModule } from './modules/vehicle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    VehicleModule,
    CompanyModule,
    UserModule,
    AuthModule,
    JwtModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
