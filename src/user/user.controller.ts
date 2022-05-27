import { Controller, Post, Get, Body, Res, UseInterceptors, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { Response, Request, raw } from 'express';


@Controller('register/page/doing')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    @UseInterceptors()
    addUser(@Body() userInfo: User, @Res() res: Response){
         console.log(userInfo);
        return this.usersService.addUser(userInfo);
    
    }
    @Get()
    @UseInterceptors()
    findAll(){
        return this.usersService.findAll();
    
    }
}


