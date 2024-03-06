import React from "react";
import classes from "./ToDoItem.module.css";
import { Todo } from "@/types/Todo";
import { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { toggleTodo, deleteTodo } from "@/store/reducers/todosSlice";
import CrossIcon from "../general/icons/cross-icon/CrossIcon";
import CircleIcon from "../general/icons/cross-icon/circle-icon/CircleIcon";

const ToDoItem: React.FC<Todo> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(toggleTodo(id));
  };

  const handleCrossIconClick = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li
      className={`${classes.container} ${
        completed ? classes.completed : classes.uncompleted
      }`}
    >
      <div onClick={handleClick} className={classes.todo}>
        <CircleIcon color={completed ? "green" : "yellow"} />
        <div>
          {text} {completed && "- completed"}
        </div>
      </div>
      <CrossIcon onClick={handleCrossIconClick} />
    </li>
  );
};

export default ToDoItem;
