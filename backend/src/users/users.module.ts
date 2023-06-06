import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ImmudbService } from 'src/immudb/immudb.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ImmudbService],
  imports: [],
})
export class UsersModule {}
