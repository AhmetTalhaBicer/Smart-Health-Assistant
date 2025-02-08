import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weight } from '../entities/weight.entity';
import { BMI } from '../entities/bmi.entity';
import { BodyMeasurementsService } from '../services/body-measurements.service';
import { BodyMeasurementsController } from '../controllers/body-measurements.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Weight, BMI])],
  providers: [BodyMeasurementsService],
  controllers: [BodyMeasurementsController],
})
export class BodyMeasurementsModule {}
