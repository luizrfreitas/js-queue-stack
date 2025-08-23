import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';
import { TestProcessor } from './producer.producer';

@Module({
  imports: [
    BullModule.registerQueue({ name: 'test' })
  ],
  controllers: [
    ProducerController
  ],
  providers: [
    ProducerService,
    TestProcessor
  ]
})
export class ProducerModule {}
