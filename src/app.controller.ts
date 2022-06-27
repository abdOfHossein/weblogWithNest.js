import { Controller, Get, Render, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('index')
  @Render('index')
  firstName() {
    return { firstName: 'Behzad' };
  }



  @Get('login/page')
  @Render('loginPage')
  msg() {
    return { msg: '' };
  }

  @Get('register/page')
  @Render('registerPage')
  error() {
    return { error: '' };
  }
}
