import { Controller, Post, Body } from '@nestjs/common';
import { BodyMeasurementsService } from '../services/body-measurements.service';
import { Weight } from '../entities/weight.entity';
import { BMI } from '../entities/bmi.entity';
import { CreateWeightDto } from '../dto/create-weight.dto';
import { CreateBMIDto } from '../dto/create-bmi.dto';

@Controller('body-measurements')
export class BodyMeasurementsController {
  constructor(
    private readonly bodyMeasurementsService: BodyMeasurementsService,
  ) {}

  @Post('weight')
  async createWeight(
    @Body() createWeightDto: CreateWeightDto,
  ): Promise<Weight> {
    return this.bodyMeasurementsService.createWeight(createWeightDto);
  }

  @Post('bmi')
  async createBMI(@Body() createBMIDto: CreateBMIDto): Promise<BMI> {
    return this.bodyMeasurementsService.createBMI(createBMIDto);
  }
}
