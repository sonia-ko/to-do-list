export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface Todos {
  items: Todo[];
}
