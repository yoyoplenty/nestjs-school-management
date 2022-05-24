import { IsNotEmpty, IsString, Length, IsOptional } from 'class-validator';

export class CreateClassDto {
  @IsString()
  @IsNotEmpty()
  @Length(4)
  class_name: string;

  @IsString()
  @IsOptional()
  @Length(4)
  department: string;
}
