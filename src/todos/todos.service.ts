import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class TodosService extends TypeOrmCrudService<Todo> {
  constructor(@InjectRepository(Todo) todosRepository: Repository<Todo>) {
    super(todosRepository);
  }
}
