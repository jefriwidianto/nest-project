import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as pg from 'pg';
import { DynamicModule } from '@nestjs/common';

export class DatabaseConfig {
  public config(): DynamicModule {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('MONGO_HOST'),
            port: +configService.get('MONGO_PORT'),
            username: configService.get('MONGO_USERNAME'),
            password: configService.get('MONGO_PASSWORD'),
            database: configService.get('MONGO_DATABASE_NAME'),
            logging: configService.get('MODE') === 'local',
            bigNumberStrings: false,
            drive: pg,
            extra: {
                max: 10,
                connectionTimeoutMillis:
                    configService.get('MODE') === 'production' ? 30000 : 1000,
            },
            retryAttempts: 3,
            retryDelay: 1000,
            entities: [`${__dirname}/../src/*/entities/*.entity{.ts,.js}`],
            migrations: [`${__dirname}/interfaces/database/migrations/*{.ts,.js}`],
        }),
    });
  }
}
