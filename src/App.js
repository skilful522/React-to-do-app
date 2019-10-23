import React from "react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { NewToDoItem } from "./components/NewToDoItem/NewToDoItem";
import "./App.css";

function App() {
  const [oldValue, setValue] = useState([]);
  const handleAddNewToDoItem = newToDoItem =>
    setValue(oldValue => [...oldValue, newToDoItem]);

  return (
    <div id="mainContainer">
      <Header />
      <ToDoList toDoItems={oldValue} />
      <NewToDoItem onAddNewToDoItem={handleAddNewToDoItem} />
    </div>
  );
}
export default App;
