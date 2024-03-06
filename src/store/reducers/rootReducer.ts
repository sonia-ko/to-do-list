import { combineReducers } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice";

const rootReducer = combineReducers({
  todos: todosSlice,
  // Add other reducers here
});

export default rootReducer;
