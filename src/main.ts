import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const HOST = 'http://127.0.0.1';
  const PORT: number = 3000;
  await app.listen(PORT);
  console.log(`${HOST}:${PORT}`);
}
bootstrap();
