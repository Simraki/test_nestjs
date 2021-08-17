import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos/todo.entity';
import { TodosModule } from './todos/todos.module';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import * as ormconfig from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TodosModule],
})
export class AppModule {}
