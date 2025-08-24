import { InjectQueue } from "@nestjs/bullmq";
import { Injectable } from "@nestjs/common";
import { Queue } from "bullmq";
import { FIVE_SECONDS } from "utils/delay";

@Injectable()
export class QueueAService {
  constructor(@InjectQueue('queue-a') private readonly queueA: Queue) {}

  public async requestAnExpensiveTask(): Promise<string | undefined> {
    const job =  await this.queueA.add(
      'an-expensive-task',
      {
        description: 'I take too many time to be finished!',
        data: 'dummy data'
      },
      {
        delay: FIVE_SECONDS,
        removeOnComplete: true,
        removeOnFail: false,
      }
    );

    return job.id;
  }
}