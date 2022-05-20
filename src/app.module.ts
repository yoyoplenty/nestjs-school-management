import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { SubjectModule } from './subject/subject.module';
import { ClassModule } from './class/class.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher/entities/teacher.entity';
import { Student } from './student/entities/student.entity';
import { Subject } from './subject/entities/subject.entity';
import { Class } from './class/entities/class.entity';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'rootUser',
      database: 'smd',
      logging: true,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Teacher, Student, Subject, Class],
    }),
    TeacherModule,
    StudentModule,
    SubjectModule,
    ClassModule,
    AuthModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
