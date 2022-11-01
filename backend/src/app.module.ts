import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'raquel',
      password: '123456789',
      database: 'taskapp',
      autoLoadEntities: true,
      synchronize:true,
    }),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
