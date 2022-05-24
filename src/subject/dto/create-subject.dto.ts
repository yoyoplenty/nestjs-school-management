import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Teacher } from 'src/teacher/entities/teacher.entity';

export class CreateSubjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 25)
  subject_name: string;

  @IsOptional()
  @IsNumber({}, { each: true })
  teacher_id?: number[];

  @IsOptional()
  teachers?: Teacher[];
}
