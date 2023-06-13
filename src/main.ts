import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from '../config/configuration';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const apiGlobalPrefix = 'api/v1';
  app.setGlobalPrefix(apiGlobalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors();
  await app.listen(configuration().apiPort);
  //await app.listen(5000);
}
bootstrap();
