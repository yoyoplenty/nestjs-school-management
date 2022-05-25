import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  BeforeInsert,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects, { eager: true })
  @JoinTable()
  teacher: Teacher[];
}
