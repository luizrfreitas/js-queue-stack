import { Module } from '@nestjs/common';
import { QueueAController } from './queue-a.controller';
import { QueueAService } from './queue-a.service';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [BullModule.registerQueue({ name: 'queue-a' })],
  controllers: [QueueAController],
  providers: [QueueAService]
})
export class QueueAModule {}
