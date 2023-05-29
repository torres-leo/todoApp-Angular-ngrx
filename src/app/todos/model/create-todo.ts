import { Todo } from './todo.interface';

export function createTodo(description: string): Todo {
  return {
    id: generateId(),
    description,
    completed: false,
  };
}

// Just a plain simple id generator to showcase the app.
// DO NOT USE IN PROD
function generateId(): string {
  const random = Math.random().toString(36).substring(2);
  const date = Date.now().toString(36);

  return random + date;
}
