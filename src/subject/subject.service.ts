import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Services } from '../services/services.utility';
import { Subject } from './entities/subject.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { Teacher } from 'src/teacher/entities/teacher.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectsRepository: Repository<Subject>,
    private teacherService: TeacherService,
    private utility: Services,
  ) {}

  async create(
    createSubjectDto: CreateSubjectDto | any,
  ): Promise<CreateSubjectDto> {
    return await this.subjectsRepository.save({
      subject_name: createSubjectDto.subject_name,
      teacher: createSubjectDto.teachers,
    });
  }

  async findAll(): Promise<CreateSubjectDto[]> {
    return this.subjectsRepository.find();
  }

  async findOne(id: number) {
    return await this.subjectsRepository.findOne(id);
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
