import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services/services.module';
import { StudentController } from './student.controller';
import { Student } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), ServicesModule],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {}
