import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentService } from 'src/student/student.service';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private teachersService: TeacherService,
    private studentsService: StudentService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'yoyoplenty',
    });
  }

  async validate(payload: any) {
    const user = payload.email
      ? await this.teachersService.findTeacher(payload.email)
      : await this.studentsService.findStudent(payload.class_id);
    if (!user) throw new UnauthorizedException('Jwt Token not Valid');
    return user;
  }
}
