import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class ProducerService {
  constructor(@InjectQueue('test') private testQueue: Queue) {}

  async job() {
    const job = await this.testQueue.add(
      'testJob',
      { foo: 'bar', },
      {
        removeOnComplete: true,
        removeOnFail: false,
        delay: 15000
      }
    );

    return job.id;
  }

  async getJob(id)
  {
    const job = await this.testQueue.getJob(id);

    if (!job) {
      return {status: 'Job not found (maybe already removed)'};
    } else {
      const isCompleted = await job.isCompleted(); // true if finished successfully
      const isFailed = await job.isFailed();       // true if failed
      const isActive = await job.isActive();       // true if being processed
      const isDelayed = await job.isDelayed();     // true if scheduled for later
      const isWaiting = await job.isWaiting();     // true if waiting in the queue

      return {
        completed: isCompleted,
        failed: isFailed,
        active: isActive,
        delayed: isDelayed,
        waiting: isWaiting,
      };
    }
  }
}