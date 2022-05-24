import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Unique,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from '../../auth/entities/role.entity';
import { Class } from '../../class/entities/class.entity';

@Entity()
@Unique(['admission_number'])
export class Student {
  @BeforeInsert()
  async hashPassword() {
    this.password = this.lastname.toLocaleUpperCase();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }

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

  @Column({ nullable: true })
  password: string;

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
