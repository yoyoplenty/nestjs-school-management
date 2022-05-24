import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services/services.module';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { Teacher } from '../teacher/entities/teacher.entity';
import { Subject } from './entities/subject.entity';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subject, Teacher]),
    ServicesModule,
    TeacherModule,
  ],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}
