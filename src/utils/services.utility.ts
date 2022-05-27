import { ForbiddenException, Injectable } from '@nestjs/common';
import * as randomstring from 'randomstring';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class Services {
  checkUser<Type>(id: number, body: Type | any, user): Type {
    const isAdmin: boolean = user.roles.includes('teacher');
    if (!isAdmin && user.id === id)
      throw new ForbiddenException(
        'You are not allowed to update Another teacher',
      );
    return body;
  }

  generateStudentId() {
    const value = 'ST';
    return (
      value +
      randomstring.generate({
        length: 5,
        charset: 'numeric',
        capitalization: 'uppercase',
      })
    );
  }

  async createToken(payload, expiresIn = String(process.env.JWT_EXPIRES)) {
    return await jwt.sign(payload, process.env.SECRET, {
      expiresIn,
    });
  }

  async verifyToken(token) {
    return await jwt.verify(token, process.env.SECRET);
  }
}
