import React from "react";
import style from "./ToDoItem.module.css";

class ToDoItem extends React.Component {
  state = {
    isChecked: false
  };

  checkItem = () => {
    this.setState({ isChecked: true });
  };

  getTaskDateContainer = () => {
    const { isChecked } = this.state;
    const taskDateContainer = style["task-date-container"];
    const taskDateContainerCross = style["task-date-container-cross"];

    if (isChecked) {
      return taskDateContainer + " " + taskDateContainerCross;
    } else {
      return taskDateContainer;
    }
  };

  render() {
    const { text, date } = this.props;

    return (
      <div className={style["toDoItem"]}>
        <div className={this.getTaskDateContainer()}>
          <div className={style["toDoText"]}>{text}</div>
          <div className={style["toDoDate"]}>{date}</div>
        </div>
        <button className={style["doneToDo"]} onClick={this.checkItem}>
          ✓
        </button>
        <button className={style["removeToDo"]}>✖</button>
      </div>
    );
  }
}

export { ToDoItem };
