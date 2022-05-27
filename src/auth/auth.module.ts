import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';
import { AuthService } from './auth.service';
import { jwtConstants } from 'src/utils/constant';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { ServicesModule } from 'src/utils/services.module';

@Module({
  imports: [
    TeacherModule,
    StudentModule,
    PassportModule,
    ServicesModule,
    JwtModule.register({
      secret: 'yoyoplenty',
      signOptions: { expiresIn: '1hr' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
