/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style, prettier/prettier
import { NestFactory } from '@nestjs/core';
// eslint-disable-next-line prettier/prettier

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();

