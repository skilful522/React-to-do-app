import React from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

function ToDoList(props) {
  return (
    <div id="toDoList">
      {props.toDoItems.map((item, index) => {
        return (
          <ToDoItem text={item.inputValue} date={item.dateValue} key={index} />
        );
      })}
    </div>
  );
}

export { ToDoList };
