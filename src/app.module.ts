import { Module } from '@nestjs/common';
import { AppController, CustomController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CustomController],
  providers: [AppService],
})
export class AppModule {}
