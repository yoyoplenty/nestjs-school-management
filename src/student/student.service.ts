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
    private utility: Services,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<CreateStudentDto> {
    try {
      const student = this.studentsRepository.create(createStudentDto);
      student.class_id = this.utility.generateStudentId();
      return await this.studentsRepository.save(student);
    } catch (err) {
      if (err.code == '23505')
        throw new ConflictException('Provided Admission Number exists');
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
