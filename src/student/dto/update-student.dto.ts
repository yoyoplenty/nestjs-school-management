import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  Length,
  IsEnum,
} from 'class-validator';
import { Role } from '../../auth/entities/role.entity';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(2, 15)
  firstname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @Length(2, 15)
  lastname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  role: Role;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(['male', 'male'])
  gender: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Length(11)
  parents_phone: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Length(5, 25)
  parents_name: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(6)
  admission_number: string;
}
