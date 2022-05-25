import {
  IsNotEmpty,
  IsString,
  Length,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Teacher } from 'src/teacher/entities/teacher.entity';

export class CreateClassDto {
  @IsString()
  @IsNotEmpty()
  @Length(4)
  class_name: string;

  @IsOptional()
  @IsString()
  @Length(4)
  department?: string;

  @IsNumber()
  teacher_id?: number;

  @IsOptional()
  teacher?: Teacher;
}
