import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  task: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsDateString()
  deadline?: string;
}
