import React from "react";
import { Header } from "./components/Header/Header";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { NewToDoItem } from "./components/NewToDoItem/NewToDoItem";
import "./App.css";

class App extends React.Component {
  state = {
    toDoItems: []
  };

  handleAddNewToDoItem = newToDoItem => {
    this.setState(oldState => ({
      toDoItems: [...oldState.toDoItems, newToDoItem]
    }));
  };

  render() {
    return (
      <div id="mainContainer">
        <Header />
        <ToDoList toDoItems={this.state.toDoItems} />
        <NewToDoItem onAddNewToDoItem={this.handleAddNewToDoItem} />
      </div>
    );
  }
}
export default App;
