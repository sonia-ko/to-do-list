import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Filters } from "@/types/Todo";

interface TodosState {
  allToDos: Todo[];
  filter: Filters;
}

const initialState: TodosState = {
  allToDos: [
    {
      id: "t1",
      text: "create my first to-do",
      completed: false,
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
    setFilter(state, action: PayloadAction<Filters>) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, setFilter, deleteTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
