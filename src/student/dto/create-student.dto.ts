import {
  IsNotEmpty,
  IsString,
  IsNumber,
  Length,
  IsEnum,
} from 'class-validator';
import { Role } from '../../auth/entities/role.entity';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 15)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 15)
  lastname: string;

  @IsNotEmpty()
  @IsEnum(['male', 'male'])
  gender: string;

  @IsString()
  @IsNotEmpty()
  @IsNotEmpty()
  role: Role;

  @IsString()
  @IsNotEmpty()
  @Length(15, 100)
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(5, 25)
  parents_name: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(11)
  parents_phone: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(6)
  admission_number: string;
}
