import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [`${__dirname}/../../modules/**/entities/*.entity{.ts,.js}`],
  logging: configService.get('nodeenv') === 'development',
  migrations: [`${__dirname}/../../../db/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
});
