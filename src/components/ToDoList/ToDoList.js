import React from "react";
import style from "./toDoList.module.css";
import { ToDoItem } from "../ToDoItem/ToDoItem";

function ToDoList() {
  return (
    <div id={style["toDoList"]}>
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export { ToDoList };
