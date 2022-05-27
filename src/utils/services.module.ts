import { Module } from '@nestjs/common';
import { BaseService } from './baseService.service';
import { Services } from './services.utility';

@Module({
  providers: [Services, BaseService],
  exports: [Services, BaseService],
})
export class ServicesModule {}
