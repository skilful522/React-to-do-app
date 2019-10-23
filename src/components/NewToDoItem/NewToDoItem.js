import React from "react";
import PropTypes from "prop-types";
import style from "./NewToDoItem.module.css";
import moment from "moment";
import { ToDoInput } from "./ToDoInput/ToDoInput";

class NewToDoItem extends React.Component {
  state = {
    inputValue: "",
    dateValue: moment().format("YYYY-MM-DD")
  };

  getInputValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validate = () => !!this.state.inputValue.trim();

  onReset = () => {
    this.setState({ inputValue: "" });
  };

  addButtonHandler = () => {
    const { inputValue, dateValue } = this.state;

    this.props.onAddNewToDoItem({ inputValue, dateValue });
    this.onReset();
  };

  render() {
    return (
      <div className={style["new-todo-item"]}>
        <ToDoInput
          className={"toDoInputText"}
          autoFocus
          value={this.state.inputValue}
          name="inputValue"
          onChange={this.getInputValue}
        />
        <ToDoInput
          className={style["toDoInputDate"]}
          type="date"
          name="dateValue"
          onChange={this.getInputValue}
          value={this.state.dateValue}
        />
        <button
          className={style["add-button"]}
          disabled={!this.validate()}
          onClick={this.addButtonHandler}
        >
          add
        </button>
      </div>
    );
  }
}

NewToDoItem.propTypes = {
  onAddNewToDoItem: PropTypes.func.isRequired
};

export { NewToDoItem };
