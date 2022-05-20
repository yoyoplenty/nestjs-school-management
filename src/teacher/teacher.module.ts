import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherService } from './teacher.service';
import { ServicesModule } from '../services/services.module';
import { TeacherController } from './teacher.controller';
import { Teacher } from './entities/teacher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher]), ServicesModule],
  controllers: [TeacherController],
  providers: [TeacherService],
  exports: [TeacherService],
})
export class TeacherModule {}
