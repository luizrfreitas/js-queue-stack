import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ProducerController } from '../producer/producer.controller';
import { ProducerModule } from '../producer/producer.module';

@Module({
  imports: [
    BullModule.forRoot({ connection: { host: 'localhost', port: 6379 }}),
    ProducerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
