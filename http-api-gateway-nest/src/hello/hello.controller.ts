import { Controller, Get } from '@nestjs/common';
@Controller()
export class HelloController {
  @Get()
  helloNATS(): string {
    return 'Hello NATS!';
  }
}
