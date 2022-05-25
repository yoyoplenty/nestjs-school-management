// import {
//   registerDecorator,
//   ValidationOptions,
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
// } from 'class-validator';

// import { Connection } from 'typeorm';
// import { Teacher } from 'src/teacher/entities/teacher.entity';
// import { Injectable } from '@nestjs/common';

// @ValidatorConstraint({ name: 'TeacherExists', async: true })
// @Injectable()
// export class teacherExistConstraint implements ValidatorConstraintInterface {
//   private teachersRepository: Teacher;
//   constructor(private readonly connection: Connection) {
//     this.teachersRepository = this.connection.getCustomRepository(Teacher);
//   }

//   async validate(teacher_id: number) {
//     console.log(this.teachersRepository);
//     const teacher = await this.teachersRepository.findOne(teacher_id);
//     if (!teacher) return false;
//     return true;
//   }
// }

// export function teacherExist(validationOptions?: ValidationOptions) {
//   return function (object: any, propertyName: string) {
//     registerDecorator({
//       name: 'TeacherExists',
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       validator: teacherExistConstraint,
//     });
//   };
// }
