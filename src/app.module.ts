import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './models/auth/auth.module';
import { LectureModule } from './models/lecture/lecture.module';
import { NaverSensModule } from './models/naver-sens/naver-sens.module';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UserModule, NaverSensModule, LectureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
