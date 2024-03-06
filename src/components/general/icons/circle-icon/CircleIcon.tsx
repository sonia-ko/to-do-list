import React from "react";
import classes from "./CircleIcon.module.css";

interface CircleIconProps {
  color: "green" | "yellow";
}

const CircleIcon: React.FC<CircleIconProps> = ({ color }) => {
  return <div className={classes[color]}></div>;
};

export default CircleIcon;
