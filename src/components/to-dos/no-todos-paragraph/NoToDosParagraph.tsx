import React from "react";
import classes from "./NoToDosParagraph.module.css";
import { Filter } from "@/types/Todo";

const NoToDosParagraph: React.FC<Filter> = ({ filter }) => {
  const generateText = () => {
    switch (filter) {
      case "completed":
        return "No completed tasks for now...";
      case "uncompleted":
        return "No new tasks, feel free to use the form and add one";
      default:
        return "Use the form above to add your first task";
    }
  };

  return <p className={classes.p}> {generateText()} </p>;
};

export default NoToDosParagraph;
