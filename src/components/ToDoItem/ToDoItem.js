import React from "react";
import style from "./ToDoItem.module.css";

class ToDoItem extends React.Component {
  state = {
    isChecked: false,
    isRemove: false
  };

  checkItem = () => {
    this.setState({ isChecked: true });
  };

  removeItem = () => {
    const toDoItems = this.props.toDoItems;
    this.setState({ isRemove: true });
    toDoItems.forEach(item => {
      if (item.id === this.props.id) {
        toDoItems.splice(toDoItems.indexOf(item), 1);
      }
    });
    this.setState({ toDoItems: toDoItems });
    this.props.update({ toDoItems });
  };

  getTaskDateContainer = () => {
    const { isChecked } = this.state;
    const taskDateContainer = style["task-date-container"];
    const taskDateContainerCross = style["task-date-container-cross"];

    if (isChecked) {
      return taskDateContainer + " " + taskDateContainerCross;
    }
    return taskDateContainer;
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
        <button className={style["removeToDo"]} onClick={this.removeItem}>
          ✖
        </button>
      </div>
    );
  }
}

export { ToDoItem };
