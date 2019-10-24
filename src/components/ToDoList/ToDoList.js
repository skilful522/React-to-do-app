import React from "react";
import { useState } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

function ToDoList(props) {
  const [oldValue, setValue] = useState(props.toDoItems);
  const updateToDoList = newToDoList => {
    setValue([newToDoList]);
  };

  return (
    <div id="toDoList">
      {props.toDoItems.map(item => (
        <ToDoItem
          toDoItems={props.toDoItems}
          text={item.inputValue}
          date={item.dateValue}
          key={item.key}
          id={item.id}
          update={updateToDoList}
        />
      ))}
    </div>
  );
}

export { ToDoList };
