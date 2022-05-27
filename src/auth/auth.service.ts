import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentService } from 'src/student/student.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Services } from 'src/utils/services.utility';

@Injectable()
export class AuthService {
  constructor(
    private teachersService: TeacherService,
    private studentsService: StudentService,
    private jwtService: JwtService,
    private utility: Services,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.teachersService.findTeacher(email);
    if (!user) throw new NotFoundException('User Not found');
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      console.log(password);
      const accessToken = await this.jwtService.sign(result);
      return { accessToken };
    }
    return null;
  }

  async validateStudent(value: string, password: string): Promise<any> {
    const user = await this.studentsService.findStudent(value);
    if (!user) throw new NotFoundException('User Not found');
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      console.log(password);
      const accessToken = await this.utility.createToken(result);
      return { accessToken };
    }
    throw new NotAcceptableException('Password Incorrect');
  }
}
