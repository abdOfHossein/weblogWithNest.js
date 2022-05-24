
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User } from './user.entity';
import { UserSchema } from './user.schema';
import { UserSubscriber } from './user.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [UsersService,UserSubscriber],
  controllers: [UsersController],
})
export class UsersModule {}
