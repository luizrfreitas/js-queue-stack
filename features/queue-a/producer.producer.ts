import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('test')
export class TestProcessor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    let progress = 0;

    console.log(job.data);

    return {};
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}