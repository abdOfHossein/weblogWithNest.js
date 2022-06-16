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
    async goDashboard(@Body() loginInfo: any, @Res() res: Response) {

        try {
            const result = await this.usersService.findOne(loginInfo)
            console.log(result);
            return res.render('blogger/dashboard',{user:result,msg:'hello'})

        } catch (error) {

            console.log(`err of goDashboard in controller:${error}`);

        }

    }
}


