import { Module } from '@nestjs/common';
import { AppController } from '@udtt/app.controller';
import { AppService } from '@udtt/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
