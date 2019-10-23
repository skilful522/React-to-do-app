import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import uuidv4 from "uuid/v4";

const ToDoList = props => (
  <div id="toDoList">
    {props.toDoItems.map(item => (
      <ToDoItem text={item.inputValue} date={item.dateValue} key={uuidv4()} />
    ))}
  </div>
);

export { ToDoList };
