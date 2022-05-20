import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  ManyToOne,
} from 'typeorm';

import { Teacher } from '../../teacher/entities/teacher.entity';

@Entity()
@Unique(['subject_name'])
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject_name: string;

  @CreateDateColumn()
  appointment_date: Date;

  @UpdateDateColumn()
  terminnation_date: Date;

  @ManyToOne(() => Teacher, (teacher) => teacher.subjects)
  teacher: Teacher;
}
