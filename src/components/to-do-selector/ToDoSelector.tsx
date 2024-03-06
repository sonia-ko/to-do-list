"use client";

import React from "react";
import classes from "./ToDoSelector.module.css";
// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks";
import ToDoList from "../to-do-list/ToDoList";
import ToDoForm from "../to-do-form/ToDoForm";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/lib/hooks";
import { setFilter } from "@/store/reducers/todosSlice";

interface ToDoSelectorProps {
  count: number;
}

const ToDoSelector: React.FC<ToDoSelectorProps> = ({ count }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.container}>
      <div className={classes["select-wrapper"]}>
        <select
          onChange={(e) =>
            dispatch(
              setFilter(e.target.value as "all" | "completed" | "uncompleted")
            )
          }
          name="todo-select"
          id="select"
          className={classes.select}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>

      <div>Number of tasks: {count} </div>
    </div>
  );
};

export default ToDoSelector;
