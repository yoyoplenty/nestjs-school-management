import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Unique,
} from 'typeorm';

import { Role } from '../../auth/entities/role.entity';
import { Class } from '../../class/entities/class.entity';

@Entity()
@Unique(['admission_number'])
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ type: 'enum', enum: ['male', 'female'] })
  gender: string;

  @Column({ unique: true, nullable: true })
  class_id: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @Column()
  address: string;

  @Column()
  parents_name: string;

  @Column()
  parents_phone: string;

  @Column()
  admission_number: string;

  @CreateDateColumn()
  appointment_date: Date;

  @UpdateDateColumn()
  terminnation_date: Date;

  @ManyToOne(() => Class, (classes) => classes.student)
  class: Class;
}
