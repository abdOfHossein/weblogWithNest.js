import { Controller, Get, Render } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('login/page')
  @Render('loginPage')
  msg() {
    return { msg: '' }
  }

  @Get('register/page')
  @Render('registerPage')
  error() {
    return { error: '' }
  }

}
