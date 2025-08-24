import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { QueueAModule } from 'features/queue-a/queue-a.module';

@Module({
  imports: [
    BullModule.forRoot({ connection: { host: 'localhost', port: 6379 }}),
    QueueAModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
