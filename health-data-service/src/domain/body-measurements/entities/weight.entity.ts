import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  weight: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  recordedAt: Date;
}
