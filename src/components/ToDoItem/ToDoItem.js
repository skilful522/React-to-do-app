import React from "react";
import style from "./toDoItem.module.css";

function ToDoItem() {
  return (
    <div className={style["todoItem"]}>
      <div className={style["task-date-container"]}>
        <div className={style["toDoText"]}>ToDoText</div>
        <div className={style["toDoDate"]}>ToDoTime</div>
      </div>
      <button className={style["doneToDo"]}>✓</button>
      <button className={style["removeToDo"]}>✖</button>
    </div>
  );
}

export { ToDoItem };
