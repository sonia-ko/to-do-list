import React from "react";
import { Todo } from "@/types/Todo";
import { useAppDispatch } from "@/lib/hooks";
import { toggleTodo, deleteTodo } from "@/store/reducers/todosSlice";
import CrossIcon from "@/components/general/icons/cross-icon/CrossIcon";
import CircleIcon from "@/components/general/icons/circle-icon/CircleIcon";
import classes from "./ToDoItem.module.css";

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
        <div>{text}</div>
      </div>
      <div className={classes.cross}>
        <CrossIcon onClick={handleCrossIconClick} />
      </div>
    </li>
  );
};

export default ToDoItem;
