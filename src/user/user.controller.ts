import { Controller, Post, Get, Body, Res, UseInterceptors, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { Response, Request, raw } from 'express';
import { type } from 'os';

@Controller('register/page/doing')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post()
    @UseInterceptors()
    addUser(@Body() userInfo: User, @Req() req: Request, @Res() res: Response) {
        const strData=userInfo.toString();
        const arrData=strData.split('&');
        const objData={};
        for (const iterator of arrData) {
            objData[iterator.split('=')[0]]=iterator.split('=')[1];
    
        }
        console.log(objData); 
    
    }

}


