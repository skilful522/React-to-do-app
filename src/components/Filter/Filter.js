import React from "react";
import style from "./Filter.module.css";

function Filter(props) {
  let filteredToDoItems = [];
  const filterHandler = event => {
    if (event.keyCode === 13) {
      const inputType = event.target.name;

      if (event.target.value || event.target.value === "") {
        filteredToDoItems = props.toDoItems.filter(toDoItem => {
          if (toDoItem[inputType].indexOf(event.target.value) >= 0) {
            return (toDoItem.isFiltered = true);
          } else if (event.target.value === "") {
            return (toDoItem.isFiltered = true);
          } else {
            return (toDoItem.isFiltered = false);
          }
        });
      }
      props.onFiltering(filteredToDoItems);
    }
  };

  const getValueHandler = event => {
    if (event.target.type === "text") {
      props.onChangeText(event.target.value);
    } else if (event.target.type === "date") {
      props.onChangeDate(event.target.value);
    }
  };

  return (
    <input
      id={style[props.id]}
      placeholder={props.placeholder}
      name={props.name}
      type={props.type}
      onKeyDown={filterHandler}
      onChange={getValueHandler}
    />
  );
}

export { Filter };
