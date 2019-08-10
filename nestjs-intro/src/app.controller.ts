import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // This is what you send back to the host
  // It auto generates a header
  // You can create your own header like below.
  //WOW it auto generated the import of a Header above.
  @Header('Content-Type', 'text/html')
  getHello(): {name: string} {
    return {name: 'Richie'};
  }
}
