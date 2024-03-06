import React from "react";
import classes from "./ToDoList.module.css";
import { Todos } from "@/types/Todo";
import ToDoItem from "../to-do-item/ToDoItem";

const ToDoList: React.FC<Todos> = ({ items }) => {
  return (
    <ul className={classes.container}>
      {items.map((el) => (
        <ToDoItem
          id={el.id}
          key={el.id}
          text={el.text}
          completed={el.completed}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
