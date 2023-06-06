import { Module } from '@nestjs/common';
import { ImmudbService } from './immudb.service';
import { ImmudbController } from './immudb.controller';

@Module({
  providers: [ImmudbService],
  controllers: [ImmudbController],
})
export class ImmudbModule {}
