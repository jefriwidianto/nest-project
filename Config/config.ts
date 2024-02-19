import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './database';

const cb = new DatabaseConfig();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './Environments/.env.' + process.env.NODE_ENV,
      isGlobal: true,
    }),
    cb.config(),
  ],
})
export class Config {}
