import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';
import { Role } from '../../auth/entities/role.entity';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  role: Role;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(['Mr', 'Mrs', 'Miss'])
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phone: string;
}
