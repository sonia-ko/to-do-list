import React from "react";
import classes from "./CrossIcon.module.css";
import { Todos } from "@/types/Todo";

interface CrossIconProps {
  onClick?: () => void;
}

const CrossIcon: React.FC<CrossIconProps> = ({ onClick }) => {
  return <div onClick={onClick} className={classes.container}></div>;
};

export default CrossIcon;
