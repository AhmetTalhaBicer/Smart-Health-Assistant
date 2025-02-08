import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BMI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  bmi: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  recordedAt: Date;
}
