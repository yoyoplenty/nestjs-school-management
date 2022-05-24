import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

import { Teacher } from '../../teacher/entities/teacher.entity';
import { Student } from '../../student/entities/student.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_name: string;

  @Column({ nullable: true })
  department: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Teacher, (teacher) => teacher.class)
  teacher: Teacher;

  @OneToMany(() => Student, (students) => students.class, { eager: true })
  student: Student[];
}
