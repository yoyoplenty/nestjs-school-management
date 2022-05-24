import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { CreateClassDto } from './create-class.dto';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @IsString()
  @IsNotEmpty()
  @Length(4)
  class_name: string;

  @IsString()
  @IsOptional()
  @Length(4)
  department: string;
}
