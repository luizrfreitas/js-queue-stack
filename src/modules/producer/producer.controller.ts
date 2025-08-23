import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiProperty, ApiParam } from '@nestjs/swagger';
import { ProducerService } from './producer.service';

@ApiTags('producer')
@Controller('producer')
export class ProducerController {
  constructor(@Inject(ProducerService) private readonly service: ProducerService) {}

  @Get()
  @ApiOperation({ summary: 'Trigger a producer job' })
  @ApiResponse({ status: 200, description: 'Job executed successfully' })
  async get() {
    return await this.service.job();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get job' })
  @ApiParam({
    name: 'id', type: Number
  })
  @ApiResponse({ status: 200, description: 'get job' })
  async getJob(@Param() params: any) {
    return await this.service.getJob(params.id);
  }
}
