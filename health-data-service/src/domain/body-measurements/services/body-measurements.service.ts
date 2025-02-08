import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weight } from '../entities/weight.entity';
import { BMI } from '../entities/bmi.entity';
import { CreateWeightDto } from '../dto/create-weight.dto';
import { CreateBMIDto } from '../dto/create-bmi.dto';

@Injectable()
export class BodyMeasurementsService {
  constructor(
    @InjectRepository(Weight)
    private weightRepository: Repository<Weight>,
    @InjectRepository(BMI)
    private bmiRepository: Repository<BMI>,
  ) {}

  async createWeight(createWeightDto: CreateWeightDto): Promise<Weight> {
    const weight = this.weightRepository.create(createWeightDto);
    return this.weightRepository.save(weight);
  }

  async createBMI(createBMIDto: CreateBMIDto): Promise<BMI> {
    const bmi = this.bmiRepository.create(createBMIDto);
    bmi.bmi = this.calculateBMI(createBMIDto.height, createBMIDto.weight);
    return this.bmiRepository.save(bmi);
  }

  private calculateBMI(height: number, weight: number): number {
    return weight / (height / 100) ** 2;
  }
}
