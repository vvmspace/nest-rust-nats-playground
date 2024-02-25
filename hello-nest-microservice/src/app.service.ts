import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // I know about KISS principle, but it is example. Put your business logic here
    return 'Hello NATS!';
  }
}
