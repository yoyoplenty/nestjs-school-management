import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginateQuery, Paginated } from 'nestjs-paginate';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { BaseService } from 'src/services/baseService.service';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    private baseService: BaseService,
  ) {}

  async create(createClassDto: CreateClassDto): Promise<CreateClassDto> {
    const newClass = await this.classRepository.create(createClassDto);
    newClass.teacher = createClassDto.teacher;
    return this.classRepository.save(newClass);
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Class>> {
    return await this.baseService.Paginate(query, this.classRepository);
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
