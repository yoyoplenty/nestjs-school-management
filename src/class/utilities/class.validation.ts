import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotAcceptableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from '../dto/create-class.dto';
import { Class } from '../entities/class.entity';

@Injectable()
export class authorValidationPipe implements PipeTransform {
  constructor(
    @InjectRepository(Class)
    private booksRepository: Repository<Class>,
  ) {}
  async transform(value: CreateClassDto, metadata: ArgumentMetadata) {
    const classPresent = await this.booksRepository.findOne({
      where: {
        class_name: value.class_name,
        department: value.department,
      },
    });
    if (classPresent) throw new NotAcceptableException(`class already Present`);
    console.log(metadata);
    return value;
  }
}
