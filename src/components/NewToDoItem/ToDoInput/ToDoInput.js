import React from "react";

function ToDoInput(props) {
  return (
    <input
      value={props.value}
      type={props.type}
      name={props.name}
      autoFocus={props.autoFocus}
      onChange={props.onChange}
    />
  );
}

export { ToDoInput };
