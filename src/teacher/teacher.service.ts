import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { Services } from '../services/services.utility';
import { BaseService } from 'src/services/baseService.service';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
    private teacherUtiity: Services,
    private baseService: BaseService,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<CreateTeacherDto> {
    try {
      const teacher = await this.teacherUtiity.hashPassword<CreateTeacherDto>(
        createTeacherDto,
      );
      const newTeacher = await this.teachersRepository.create(teacher);
      return await this.teachersRepository.save(newTeacher);
    } catch (err) {
      if (err.code == '23505')
        throw new ConflictException('User with the Provided Email exists');
      throw new InternalServerErrorException('Unable to Create Teacher');
    }
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Teacher>> {
    return await this.baseService.Paginate(query, this.teachersRepository);
  }

  async findOne(id: number): Promise<Teacher> {
    return await this.teachersRepository.findOne(id);
  }

  async findUser(email: string): Promise<Teacher> {
    return await this.teachersRepository.findOne({ email: email });
  }

  async update(
    id: number,
    updateTeacherDto: UpdateTeacherDto,
    reqTeacher,
  ): Promise<Teacher> {
    const teacher = await this.teacherUtiity.checkUser<UpdateTeacherDto>(
      id,
      updateTeacherDto,
      reqTeacher,
    );
    await this.teachersRepository.update(id, teacher);
    const updatedTeacher = await this.teachersRepository.findOne(id);
    return updatedTeacher;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
