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
import { Todo as TodoInterface } from './todos/todo.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): TodoInterface[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id', ParseIntPipe) id: number): TodoInterface {
    return this.todoService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto): TodoInterface {
    return this.todoService.createTodo(newTodo);
  }

  @Delete(':id')
  deleteTodoById(@Param('id', ParseIntPipe) id: number): TodoInterface {
    return this.todoService.deleteTodoById(id);
  }

  @Patch(':id')
  updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedTodo: UpdateTodoDto,
  ): TodoInterface {
    return this.todoService.updateTodo(id, updatedTodo);
  }
}
