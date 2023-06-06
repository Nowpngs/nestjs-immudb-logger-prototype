import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const importModules = [UsersModule];
@Module({
  imports: importModules,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
