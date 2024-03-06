export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface Todos {
  items: Todo[];
}

export type Filters = "all" | "completed" | "uncompleted";

export interface Filter {
  filter: "all" | "completed" | "uncompleted";
}
