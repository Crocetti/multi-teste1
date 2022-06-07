import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Message } from '@multi-teste/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('auth')
  getAuth(@Res() res: Response) {
    this.appService.getAuthentication().subscribe({
      next: (teste) => {  
        console.log(teste);
        res.json(teste).end();
      },
      error: (error) => {
        console.error(error);
        res.json(error).end();
      },
      complete: () => {}
    })
  }

}
