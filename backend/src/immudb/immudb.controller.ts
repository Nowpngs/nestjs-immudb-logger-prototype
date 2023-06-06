import { Controller, Get, Query } from '@nestjs/common';
import { HistoryResponse, ImmudbService } from './immudb.service';

@Controller('immudb')
export class ImmudbController {
  constructor(private immudbService: ImmudbService) {}

  @Get()
  async getLogs(@Query('key') key: string): Promise<HistoryResponse> {
    if (key) {
      return this.immudbService.getLogs(key);
    }
  }
}
