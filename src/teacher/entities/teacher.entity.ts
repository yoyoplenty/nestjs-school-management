import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToOne,
  BeforeInsert,
  //JoinColumn,
  ManyToMany,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from '../../auth/entities/role.entity';
import { Subject } from '../../subject/entities/subject.entity';
import { Class } from '../../class/entities/class.entity';

@Entity()
@Unique(['email'])
export class Teacher {
  @BeforeInsert()
  async hashPassword() {
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

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['Mr', 'Mrs', 'Miss'] })
  title: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: Role,
  })
  role: Role;

  @CreateDateColumn()
  appointment_date: Date;

  @UpdateDateColumn()
  terminnation_date: Date;

  @ManyToMany(() => Subject, (subject) => subject.teacher /* { eager: true } */)
  subjects: Subject[];

  @OneToOne(() => Class, (classes) => classes.teacher)
  class: Class;
}
