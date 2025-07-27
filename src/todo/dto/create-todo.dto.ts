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
  @IsNotEmpty({ message: 'Task cannot be empty.' })
  @MinLength(2, { message: 'Task must contain a minimum of 2 characters.' })
  @MaxLength(50, { message: 'Task cannot contain more than 50 characters.' })
  @IsString({ message: 'Task must be a string.' })
  task: string;

  @IsOptional()
  @IsBoolean({ message: 'Completed must be a boolean value.' })
  completed?: boolean;

  @IsOptional()
  @IsDateString(
    {},
    {
      message:
        'Deadline must be a valid ISO 8601 date string in YYYY-MM-DD (e.g., 2025-08-13 or 2025-08-03T15:30:00Z).',
    },
  )
  deadline?: string;
}
