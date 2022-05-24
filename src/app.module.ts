import { Module ,NestModule,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './user/user.entity';
import { UsersModule } from './user/user.module';

import{RawBodyMiddleware} from './raw-body.middleware';
import{JsonBodyMiddleware} from './json-body.middleware';
import { UsersController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '774936188',
      database: 'test',
      entities: [User],
      synchronize: true,
      autoLoadEntities:true
    }),
    UsersModule
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

