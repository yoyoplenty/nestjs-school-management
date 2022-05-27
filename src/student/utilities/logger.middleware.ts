import {
  Injectable,
  NestMiddleware,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { StudentService } from 'src/student/student.service';
import { Services } from 'src/utils/services.utility';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(
    private studentsService: StudentService,
    private utility: Services,
  ) {}
  async use(req: Request | any, res: Response, next: NextFunction) {
    if (!req.headers.authorization)
      throw new UnauthorizedException('You are not Logged In');
    const extractedStudent: any = await this.utility.verifyToken(
      req.headers.authorization.split(' ')[1],
    );
    console.log('hi');
    if (!req.headers.authorization.split(' ')[1] || !extractedStudent)
      throw new UnauthorizedException('Invalid or expired token');
    console.log('hi');
    const student = await this.studentsService.findStudent(
      extractedStudent.class_id,
    );
    if (!student) throw new NotFoundException();
    req.student = student;
    next();
  }
}
