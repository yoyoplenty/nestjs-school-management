import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from '../entities/subject.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Injectable()
export class teacherInSubjectPipe implements PipeTransform {
  constructor(
    @InjectRepository(Subject)
    private subjectsRepository: Repository<Subject>,
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
  ) {}
  async transform(value: CreateSubjectDto, metadata: ArgumentMetadata) {
    const subject = await this.subjectsRepository.findOne({
      subject_name: value.subject_name,
    });
    if (subject) throw new ConflictException('subject already exist');
    let teacher: Teacher;
    if (!value.teacher_id) return value;
    const [...teachers]: number[] = value.teacher_id;
    const teacherValue: Teacher[] = [];
    for (let i = 0; i < teachers.length; i++) {
      teacher = await this.teachersRepository.findOne(teachers[i]);
      if (!teacher)
        throw new NotFoundException(
          `Teacher with provided id ${teachers[i]} not found`,
        );
      teacherValue.push(teacher);
    }
    value.teachers = teacherValue;
    console.log(metadata);
    return value;
  }
}

/***
 * 
 * if (typeof value.teacher_id === 'number') {
      teacher = await this.teachersRepository.findOne(value.teacher_id);
      if (!teacher)
        throw new NotFoundException(
          `Teacher with provided id ${value.teacher_id} not found`,
        );
      return value;
    }
 * 
 * 
 * This is to check if provided teachers already Exist in Subject
 * /*   for (let i = 0; i < teachers.length; i++) {
      const subjectTeacher = await this.subjectsRepository.findOne({
        where: {
          subject_name: value.subject_name,
          teacher: { id: teachers[i] },
        },
      });
      console.log(subjectTeacher);
      if (subjectTeacher)
        throw new ConflictException(
          `Teacher with id ${teachers[i]} already assigned to Subject`,
        );
    } */
