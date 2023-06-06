import { Controller, Get, Query } from '@nestjs/common';
import { ImmudbService } from './immudb.service';

@Controller('immudb')
export class ImmudbController {
  constructor(private immudbService: ImmudbService) {}

  @Get()
  async getLogs(@Query('key') key: string): Promise<any> {
    if (key) {
      return this.immudbService.getLogs(key);
    }
  }
}
