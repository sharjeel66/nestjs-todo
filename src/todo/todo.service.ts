import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo as TodoInterface } from './todos/todo.interface';
import todos from './todos/todos';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  //Simple function to return all todos
  getAllTodos(): TodoInterface[] {
    return todos;
  }

  //Function to return todo by id. Incase of not found, throws an exception
  getTodoById(id: number): TodoInterface {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException('Todo not found.');
    return todo;
  }

  //Function to create todo
  createTodo(newTodo: CreateTodoDto): TodoInterface {
    let id = (todos.at(-1)?.id ?? 0) + 1; //This finds the last id and adds 1
    const task: TodoInterface = {
      id: id,
      task: newTodo.task,
      completed: newTodo.completed ? newTodo.completed : false,
      deadline: newTodo.deadline ? new Date(newTodo.deadline) : new Date(),
    };
    todos.push(task);
    return task;
  }

  //Delete by id. Incase of not found, throws an exception
  deleteTodoById(id: number): TodoInterface {
    let index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      return todos.splice(index, 1)[0];
    } else {
      throw new NotFoundException();
    }
  }

  //Updates todo based on id from param and body. Expects you to either send the updated task, deadline or completed status and returns the updated todo
  updateTodo(id: number, updatedTodo: UpdateTodoDto): TodoInterface {
    const todo = this.getTodoById(id);
    if (updatedTodo.task !== undefined) todo!.task = updatedTodo.task;
    if (updatedTodo.completed !== undefined)
      todo!.completed = updatedTodo.completed;
    if (updatedTodo.deadline !== undefined)
      todo!.deadline = new Date(updatedTodo.deadline);
    return todo;
  }
}
