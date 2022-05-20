import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Services } from '../services/services.utility';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    private teacherUtiity: Services,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    try {
      const student = await this.teacherUtiity.hashPassword<CreateStudentDto>(
        createStudentDto,
      );
      const newStudent = this.studentsRepository.create(student);
      return await this.studentsRepository.save(newStudent);
    } catch (err) {
      if (err.code == '23505')
        throw new ConflictException('User with the Provided Admission exists');
      throw new InternalServerErrorException('Unable to Create Student');
    }
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    console.log(updateStudentDto);
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
