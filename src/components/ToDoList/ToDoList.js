import React from "react";
import { useState } from "react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

function ToDoList(props) {
  const [oldValue, setValue] = useState(props.toDoItems);
  const updateToDoList = newToDoList => {
    return setValue([newToDoList]);
  };

  return (
    <div id="toDoList">
      {props.toDoItems
        .filter(item => item.isFiltered === true)
        .map(item => (
          <ToDoItem
            toDoItems={props.toDoItems}
            text={item.inputValue}
            date={item.dateValue}
            key={item.key}
            id={item.id}
            className={item.className}
            isFiltered={item.isFiltered}
            isChecked={item.isChecked}
            update={updateToDoList}
          />
        ))}
    </div>
  );
}

export { ToDoList };
