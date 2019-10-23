import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

const ToDoList = props => (
  <div id="toDoList">
    {props.toDoItems.map(item => (
      <ToDoItem
        text={item.inputValue}
        date={item.dateValue}
        key={item.key}
        id={item.id}
      />
    ))}
  </div>
);

export { ToDoList };
