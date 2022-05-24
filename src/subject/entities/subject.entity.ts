import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';

import { Teacher } from '../../teacher/entities/teacher.entity';

@Entity()
@Unique(['subject_name'])
export class Subject {
  @BeforeInsert()
  nameToUpperCase() {
    this.subject_name = this.subject_name.toLocaleUpperCase();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject_name: string;

  @CreateDateColumn()
  appointment_date: Date;

  @UpdateDateColumn()
  terminnation_date: Date;

  @ManyToOne(() => Teacher, (teacher) => teacher.subjects, { eager: true })
  teacher: Teacher;
}
