import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services/services.module';
import { Class } from './entities/class.entity';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { TeacherModule } from 'src/teacher/teacher.module';
import { Teacher } from 'src/teacher/entities/teacher.entity';
// import { teacherExistConstraint } from './validation/teacher.validation';

@Module({
  imports: [
    TypeOrmModule.forFeature([Class, Teacher]),
    TeacherModule,
    ServicesModule,
  ],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
