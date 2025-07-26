import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoEntity } from './todos/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): TodoEntity[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id', ParseIntPipe) id: number): TodoEntity | undefined {
    return this.todoService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto): TodoEntity {
    return this.todoService.createTodo(newTodo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id', ParseIntPipe) id: number): TodoEntity {
    return this.todoService.deleteTodoById(id);
  }

  @Patch(':id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedTodo: UpdateTodoDto,
  ): TodoEntity | undefined {
    return this.todoService.updateTodo(id, updatedTodo);
  }
}
