import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost/assessments'),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(`${configuration().database.host}`),
    SharedModule,
    AuthModule,
    ProductModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
