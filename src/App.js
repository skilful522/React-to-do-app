import React from "react";
import { Header } from "./components/Header/Header";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { NewToDoItem } from "./components/NewToDoItem/NewToDoItem";
import './App.css'
import moment from "moment";

function App() {
  const date = moment().format("YYYY-MM-DD");
  return (
    <div id="mainContainer">
      <Header />
      <ToDoList />
      <NewToDoItem date={date} />
    </div>
  );
}

export default App;
