import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { ExpensiveTaskJob } from "../type/ExpensiveTaskJob";

@Processor('queue-a')
export class QueueAConsumer extends WorkerHost {
  async process(job: Job<ExpensiveTaskJob>) {
    return;
  }

  // @OnWorkerEvent('failed')
  // @OnWorkerEvent('completed')
  // @OnWorkerEvent('active')
}