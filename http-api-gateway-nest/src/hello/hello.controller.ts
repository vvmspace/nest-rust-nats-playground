import { Controller, Get } from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
@Controller()
export class HelloController {
  @ApiTags('Hello')
  @ApiOperation({ summary: 'Hello NATS' })
  @Get()
  helloNATS(): string {
    return 'Hello NATS!';
  }
}
