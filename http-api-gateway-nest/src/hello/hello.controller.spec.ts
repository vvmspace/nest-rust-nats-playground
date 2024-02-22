import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('AppController', () => {
  let appController: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [],
    }).compile();

    appController = app.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return "Hello NATS!"', () => {
      expect(appController.helloNATS()).toBe('Hello NATS!');
    });
  });
});
