// import {
//   registerDecorator,
//   ValidationOptions,
//   ValidatorConstraint,
//   ValidatorConstraintInterface,
//   ValidationArguments,
// } from 'class-validator';
// import {
//   PipeTransform,
//   Injectable,
//   ArgumentMetadata,
//   NotAcceptableException,
// } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Subject } from '../entities/subject.entity';

// @ValidatorConstraint({ async: true })
// export class teacherInSubjectExists implements ValidatorConstraintInterface {
//   constructor(
//     @InjectRepository(Subject)
//     private subjectsRepository: Repository<Subject>,
//   ) {}
//   validate(userName: any, args: ValidationArguments) {
//     return UserRepository.findOneByName(userName).then((user) => {
//       if (user) return false;
//       return true;
//     });
//   }
// }

// export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       constraints: [],
//       validator: IsUserAlreadyExistConstraint,
//     });
//   };
// }
