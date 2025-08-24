import { Controller, Get, Inject, Post } from "@nestjs/common";
import { QueueAService } from "./queue-a.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Queue A')
@Controller('queue-a')
export class QueueAController {
  constructor(@Inject(QueueAService) private readonly service: QueueAService) {}

  @Post('expensive-task')
  public async doAnExpensiveTask() {
    const jobId = await this.service.requestAnExpensiveTask();

    return {
      message: '"An expensive task" was added to the queue.',
      id: jobId
    };
  }

  @Get('expensive-task')
  public async getExpensiveTaskStatus() {
    return {};
  }
}
