import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Termination signal handler
  process.on('SIGINT', () => {
    app.close().then(() => process.exit(0));
  });

  await app.listen(3000);
}
bootstrap();
