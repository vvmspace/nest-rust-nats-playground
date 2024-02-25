import { Module } from '@nestjs/common';
import { NatsClientModule } from '../nats-client/nats.module';
import { HelloController } from './hello.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [HelloController],
  providers: [],
  exports: [],
})
export class HelloModule {}
