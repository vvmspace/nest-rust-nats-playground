import { Controller, Get, Inject } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
@Controller()
export class HelloController {
  constructor(@Inject('NATS_SERVICE') private readonly client: ClientProxy) {}
  @ApiTags('Hello')
  @ApiOperation({ summary: 'Hello NATS' })
  @Get()
  helloNATS(): Observable<string> {
    return this.client.send<string>('hello', {});
  }
}
