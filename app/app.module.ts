import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ProducerModule } from 'features/queue-a/producer.module';

@Module({
  imports: [
    BullModule.forRoot({ connection: { host: 'localhost', port: 6379 }}),
    ProducerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
