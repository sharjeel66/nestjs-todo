import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTodoDto {
  @IsString({ message: 'Task must be string.' })
  @IsNotEmpty({ message: 'Task cannot be empty.' })
  @MinLength(2, { message: 'Task must contain a minimum of 2 characters.' })
  @MaxLength(50, { message: 'Task cannot contain more than 50 characters.' })
  task: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsDateString()
  deadline?: string;
}
