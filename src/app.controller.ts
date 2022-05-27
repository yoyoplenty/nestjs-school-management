import {
  Controller,
  Body,
  Get,
  Request,
  Post,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async teacherLogin(@Request() req) {
    return req.user;
  }

  @Post('login/student')
  async studentLogin(@Body() student) {
    return await this.appService.studentLogin(
      student.class_id,
      student.password,
    );
  }
}
