import { Controller, Post, Get, Body, Res, UseInterceptors, Req } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { Response, Request, raw } from 'express';
import { CreatUserDto } from './isEmptyValidate';


@Controller()
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Post('register/page/doing')
    @UseInterceptors()
    async addUser(@Body() creatUserDto:CreatUserDto, @Res() res: Response) {

        try {

           

            const result = await this.usersService.addUser(creatUserDto);
            if ('msg' in result) {
                return res.render('registerPage', { error: result['msg'] })
            }

            res.render('loginPage', { msg: 'register ok' });
            return

        } catch (error) {
            console.log(`err of addUser in controller:${error}`);

        }

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
            return res.render('blogger/dashboard', { user: result, msg: 'hello' })

        } catch (error) {

            console.log(`err of goDashboard in controller:${error}`);

        }

    }
}


