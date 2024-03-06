"use client";

import React from "react";
import { useAppSelector } from "@/lib/hooks";
import ToDoList from "../to-do-list/ToDoList";
import ToDoForm from "../to-do-form/ToDoForm";
import ToDoSelector from "../to-do-selector/ToDoSelector";
import NoToDosParagraph from "../no-todos-paragraph/NoToDosParagraph";
import { RootState } from "@/store/store";
import classes from "./ToDosContainer.module.css";

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

  return (
    <section className={classes.container}>
      <ToDoForm />
      <ToDoSelector count={visibleTodos.length} />
      {visibleTodos.length > 0 ? (
        <ToDoList items={visibleTodos} />
      ) : (
        <NoToDosParagraph filter={filter} />
      )}
    </section>
  );
};

export default ToDosContainer;
