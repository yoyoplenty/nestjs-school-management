import { IsNotEmpty, IsString, IsEmail, IsEnum, Length } from 'class-validator';
import { Role } from '../../auth/entities/role.entity';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 15)
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 15)
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Length(10, 50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  password: string;

  @IsNotEmpty()
  @IsEnum(['Mr', 'Mrs', 'Miss'])
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(15, 100)
  address: string;

  @IsNotEmpty()
  @IsString()
  @Length(11)
  phone: string;

  @IsString()
  @IsNotEmpty()
  role: Role;
}
