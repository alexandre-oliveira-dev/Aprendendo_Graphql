/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.resolver';
import { AppService } from './app.service';

@Module({
  providers: [AppController, AppService],
  exports: [],
})
export class UsersModule {}
