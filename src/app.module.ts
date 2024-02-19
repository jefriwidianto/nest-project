import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Config } from '../Config/config';

@Module({
  imports: [UsersModule, Config],
})
export class AppModule {}
