"use client";

import React, { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { addTodo } from "@/store/reducers/todosSlice";
import { generateUniqueId } from "@/lib/utils";
import classes from "./ToDoForm.module.css";

const ToDoForm: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTodo(newValue);
    console.log(newValue.length);
    if (newValue.length > 1) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      addTodo({ text: todo, id: generateUniqueId("todo"), completed: false })
    );
    setTodo("");
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <div>Enter your next task here:</div>
      <input value={todo} onChange={handleChange} type="text" />
      <button disabled={!buttonEnabled} type="submit">
        Add todo
      </button>
    </form>
  );
};

export default ToDoForm;
