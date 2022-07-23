import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';

import { RawBodyMiddleware } from './raw-body.middleware';
import { JsonBodyMiddleware } from './json-body.middleware';
import { UsersController } from './user/user.controller';
import path, { join } from 'path';

const config = require('dotenv').config(join(__dirname,'/.env'));

const password = process.env.DB_PASSWORD;
const port = Number(process.env.DB_PORT);
const username = process.env.DB_USERNAME;
console.log(password);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port,
      username,
      password,
      database: 'user',
      entities: [User],
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(JsonBodyMiddleware)
      .forRoutes(UsersController)
      .apply(RawBodyMiddleware)
      .forRoutes(UsersController);
  }
}
