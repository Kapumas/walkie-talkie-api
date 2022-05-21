import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  getAPI() {
    return {
      name: 'walkie-talkie-api',
      env: process.env.NODE_ENV,
      version: '1.0.0',
    };
  }
}
