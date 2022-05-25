import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClassDto } from '../dto/create-class.dto';
import { Repository } from 'typeorm';
import { Class } from '../entities/class.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Injectable()
export class classExistPipe implements PipeTransform {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}
  async transform(value: CreateClassDto, metadata: ArgumentMetadata) {
    let theClass: CreateClassDto;
    if (!value.department || value.department === null) {
      theClass = await this.classRepository.findOne({
        class_name: value.class_name,
      });
      if (theClass) throw new ConflictException('Class already exist');
    }
    theClass = await this.classRepository.findOne({
      where: {
        class_name: value.class_name,
        department: value.department,
      },
    });
    if (theClass) throw new ConflictException('Class already exist');
    if (value.teacher_id) {
      const teacher = await this.teacherRepository.findOne(value.teacher_id);
      if (!teacher)
        throw new NotFoundException(
          `teacher id, ${value.teacher_id} not found`,
        );
      const classTeacher = await this.classRepository.findOne({
        where: {
          teacher: { id: teacher.id },
        },
      });
      if (classTeacher)
        throw new ConflictException(
          `teacher ${
            (teacher.firstname, teacher.lastname)
          } already assigned to a class`,
        );
      value.teacher = teacher;
    }
    console.log(metadata);
    return value;
  }
}
