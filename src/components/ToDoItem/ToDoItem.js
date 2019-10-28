import React from "react";
import style from "./ToDoItem.module.css";

class ToDoItem extends React.Component {
  state = {
    isRemove: false
  };

  checkItem = () => {
    const toDoItems = this.props.toDoItems;

    toDoItems.forEach(item => {
      if (item.id === this.props.id) {
        item.isChecked = true;
        item.className = `${style["taskDateContainer"]} ${
          style["task-date-container-cross"]
        }`;
      }
    });
    this.props.update({ toDoItems });
  };

  removeItem = () => {
    const toDoItems = this.props.toDoItems;

    this.setState({ isRemove: true });
    toDoItems.forEach(item => {
      if (item.id === this.props.id) {
        toDoItems.splice(toDoItems.indexOf(item), 1);
      }
    });
    this.props.update({ toDoItems });
  };

  render() {
    const { text, date } = this.props;
    return (
      <div className={style["toDoItem"]}>
        <div className={this.props.className}>
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
