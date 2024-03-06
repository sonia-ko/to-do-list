import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "@/types/Todo";

interface TodosState {
  allToDos: Todo[];
  filter: "all" | "completed" | "uncompleted";
}

const initialState: TodosState = {
  allToDos: [
    {
      id: "t1",
      text: "complete to-do-list",
      completed: false,
    },
    {
      id: "t2",
      text: "read a book",
      completed: true,
    },
    {
      id: "t3",
      text: "excercise for 15 minutes",
      completed: true,
    },
    {
      id: "t4",
      text: "drink coffee",
      completed: true,
    },
  ],

  filter: "all",
};

const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.allToDos = [...state.allToDos, action.payload];
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.allToDos = state.allToDos.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const index = state.allToDos.findIndex(
        (todo) => todo.id === action.payload
      );
      if (index !== -1) {
        state.allToDos[index].completed = !state.allToDos[index].completed;
      }
    },
    setFilter(
      state,
      action: PayloadAction<"all" | "completed" | "uncompleted">
    ) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, setFilter, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
