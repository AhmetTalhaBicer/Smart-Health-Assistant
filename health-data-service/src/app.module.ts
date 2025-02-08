import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseConfig from './db/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyMeasurementsModule } from './domain/body-measurements/module/body-measurements.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [DatabaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([]),
    BodyMeasurementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
