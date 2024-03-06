"use client";

import React, { useEffect } from "react";
import classes from "./ToDosContainer.module.css";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import ToDoList from "../to-do-list/ToDoList";
import ToDoForm from "../to-do-form/ToDoForm";
import ToDoSelector from "../to-do-selector/ToDoSelector";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/lib/hooks";
// import { setVisibleTodos } from "@/store/reducers/todosSlice";

const ToDosContainer: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.todos.allToDos);
  const filter = useAppSelector((state: RootState) => state.todos.filter);

  const setVisibleTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "uncompleted":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const visibleTodos = setVisibleTodos();

  const dispatch = useAppDispatch();

  return (
    <section className={classes.container}>
      <ToDoForm />
      <ToDoSelector count={visibleTodos.length} />
      <ToDoList items={visibleTodos} />
    </section>
  );
};

export default ToDosContainer;
