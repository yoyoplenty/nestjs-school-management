import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services/services.module';
import { Class } from './entities/class.entity';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class]), ServicesModule],
  controllers: [ClassController],
  providers: [ClassService],
  exports: [ClassService],
})
export class ClassModule {}
