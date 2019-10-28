import React from "react";
import PropTypes from "prop-types";
import style from "./NewToDoItem.module.css";
import moment from "moment";
import { ToDoInput } from "./ToDoInput/ToDoInput";
import uuidv4 from "uuid/v4";

class NewToDoItem extends React.Component {
  state = {
    inputValue: "",
    dateValue: moment().format("YYYY-MM-DD"),
    id: "",
    key: "",
    className: 'ToDoItem_task-date-container__36cuE',
    isFiltered: true,
    isChecked: false
  };

  getInputValue = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ id: Date.now() });
    this.setState({ key: uuidv4() });
  };

  validate = () => !!this.state.inputValue.trim();

  onReset = () => {
    this.setState({ inputValue: "" });
  };

  addButtonHandler = () => {
    const {
      inputValue,
      dateValue,
      id,
      key,
      className,
      isFiltered,
      isChecked,
    } = this.state;

    this.props.onAddNewToDoItem({
      inputValue,
      dateValue,
      id,
      key,
      className,
      isFiltered,
      isChecked
    });
    this.onReset();
  };
  render() {
    return (
      <div className={style["new-todo-item"]}>
        <ToDoInput
          autoFocus
          value={this.state.inputValue}
          name="inputValue"
          onChange={this.getInputValue}
        />
        <ToDoInput
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
