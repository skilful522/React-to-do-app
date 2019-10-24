import React from "react";
import style from "./Sorter.module.css";
import { useState } from "react";

function Sorter(props) {
  const [isSorted, setValue] = useState(false);
  const sortHandler = () => {
    if (props.name === "alphabetSorter") {
      if (!isSorted) {
        const sortedToDoItems = sort(props);

        props.onSorting(sortedToDoItems);
        setValue(true);
      } else {
        const sortedToDoItems = sort(props);

        props.onSorting(sortedToDoItems);
        setValue(false);
      }
    } else {
      if (!isSorted) {
        const sortedToDoItems = sort(props);

        props.onSorting(sortedToDoItems);
        setValue(true);
      } else {
        const sortedToDoItems = sort(props);

        props.onSorting(sortedToDoItems);
        setValue(false);
      }
    }
  };

  return (
    <button onClick={sortHandler} id={style[props.id]}>
      {props.value}
    </button>
  );
}

function sort(props) {
  return props.toDoItems.sort((current, next) =>
    current.name > next.name ? 1 : -1
  );
}

export { Sorter };
