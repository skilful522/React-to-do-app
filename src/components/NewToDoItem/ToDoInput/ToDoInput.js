import React from "react";

const ToDoInput = props => (
  <input
    value={props.value}
    type={props.type}
    name={props.name}
    onChange={props.onChange}
  />
);

export { ToDoInput };
