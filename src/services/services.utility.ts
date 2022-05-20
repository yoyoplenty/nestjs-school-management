import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class Services {
  /* async hashPassword(teacher: CreateTeacherDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(teacher.password, salt);
    teacher.password = hashedPassword;
    return teacher;
  } */
  async hashPassword<Type>(teacher: Type | any): Promise<Type> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(teacher.password, salt);
    teacher.password = hashedPassword;
    return teacher;
  }

  checkUser<Type>(id: number, body: Type | any, user): Type {
    const isAdmin: boolean = user.roles.includes('teacher');
    if (!isAdmin && user.id === id)
      throw new ForbiddenException(
        'You are not allowed to update Another teacher',
      );
    return body;
  }
}
