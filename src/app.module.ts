import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoxController } from './fox/fox.controller';
import { FoxService } from './fox/fox.service';

@Module({
  imports: [],
  controllers: [AppController, FoxController],
  providers: [AppService, FoxService],
})
export class AppModule {}
