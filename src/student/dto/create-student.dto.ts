import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
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
  @IsEnum(['male', 'female'])
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
  @IsString()
  @Length(5, 25)
  parents_name: string;

  @IsNotEmpty()
  @Length(11)
  parents_phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(6)
  admission_number: string;
}
