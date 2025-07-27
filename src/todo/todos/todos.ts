import { Todo } from './todo.interface';
const todos: Todo[] = [
  {
    id: 1,
    task: 'Complete todos project',
    completed: false,
    deadline: new Date('2025-07-26'),
  },
  {
    id: 2,
    task: 'Learn NextJS',
    completed: false,
    deadline: new Date('2025-07-28'),
  },
  {
    id: 3,
    task: 'Learn NestJS',
    completed: false,
    deadline: new Date('2025-07-28'),
  },
  {
    id: 4,
    task: 'Practise DSA',
    completed: false,
    deadline: new Date('2025-07-28'),
  },
  {
    id: 5,
    task: 'Exercise',
    completed: false,
    deadline: new Date('2025-07-29'),
  },
];

export default todos;
