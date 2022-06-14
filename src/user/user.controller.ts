import { Controller, Post, Get, Body, Res, UseInterceptors, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { Response, Request, raw } from 'express';


@Controller()
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post('register/page/doing')
    @UseInterceptors()
    addUser(@Body() userInfo: User, @Res() res: Response) {
        console.log(userInfo);
        const user = this.usersService.addUser(userInfo);
        res.render('loginPage', { msg: 'register ok' });
        return

    }
    @Get()
    @UseInterceptors()
    findAll() {
        return this.usersService.findAll();

    }
    @Post('login/page/doing')
    @UseInterceptors()
    goDashboard(@Body() loginInfo: any, @Res() res: Response) {

       const result= this.usersService.findOne(loginInfo);
        console.log(loginInfo);
        console.log(result);
        



    }
}


