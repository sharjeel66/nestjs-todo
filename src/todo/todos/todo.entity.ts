export interface TodoEntity {
  id: number;
  task: string;
  completed?: boolean;
  deadline?: Date;
}
