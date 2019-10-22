import React from "react";
import style from "./ToDoItem.module.css";

class ToDoItem extends React.Component {
  state = {
    id: Date.now()
  };

  render() {
    const { text, date } = this.props;
    return (
      <div className={style["toDoItem"]}>
        <div className={style["task-date-container"]} id={this.state.id}>
          <div className={style["toDoText"]}>{text}</div>
          <div className={style["toDoDate"]}>{date}</div>
        </div>
        <button className={style["doneToDo"]}>✓</button>
        <button className={style["removeToDo"]}>✖</button>
      </div>
    );
  }
}

export { ToDoItem };
