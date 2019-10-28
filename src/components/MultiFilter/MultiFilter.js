import React from "react";
import style from "./MultiFilter.module.css";

const MultiFilter = props => {
  const multiFilterHandler = () => {
    const textFilterValue = props.inputFilterValue;
    const dateFilterValue = props.dateFilterValue;
    let multiFilteredList = [];

    if (textFilterValue !== "" && dateFilterValue !== "") {
      multiFilteredList = props.toDoItems.filter(toDoItem => {
        if (
          toDoItem.inputValue === textFilterValue &&
          toDoItem.dateValue === dateFilterValue
        ) {
          return (toDoItem.isFiltered = true);
        } else {
          return (toDoItem.isFiltered = false);
        }
      });
      props.onFiltering(multiFilteredList);
    } else {
      multiFilteredList = props.toDoItems.filter(toDoItems => {
        return (toDoItems.isFiltered = true);
      });
      props.onFiltering(multiFilteredList);
    }
  };
  return (
    <button id={style[props.id]} onClick={multiFilterHandler}>
      {props.value}
    </button>
  );
};

export { MultiFilter };
