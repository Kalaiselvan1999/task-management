import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('/custom')
export class CustomController {
  @Get()
  getUsers(@Req() request: Request): object {
    return [
      {
        userId: 1,
        userName: 'kalaiselvan',
        role: 'Admin',
      },
      {
        userId: 2,
        userName: 'Aravind',
        role: 'Admin',
      },
    ];
  }
}
