import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async studentLogin(class_id: string, password: string) {
    return this.authService.validateStudent(class_id, password);
  }
}
