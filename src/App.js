import React from "react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { NewToDoItem } from "./components/NewToDoItem/NewToDoItem";
import { Sorter } from "./components/Sorter/Sorter";
import "./App.css";

function App() {
  const [oldValue, setValue] = useState([]);
  const handleAddNewToDoItem = newToDoItem =>
    setValue(oldValue => [newToDoItem, ...oldValue]);

  const handleSorting = sortedToDoItems => {
      setValue([...sortedToDoItems]);
  };

  return (
    <div id="mainContainer">
      <Header />
      <ToDoList toDoItems={oldValue} />
      <NewToDoItem onAddNewToDoItem={handleAddNewToDoItem} />
      <div id="sortButtonsContainer">
        <Sorter
          value={"sort by alphabet"}
          id="sortAlphabet"
          toDoItems={oldValue}
          onSorting={handleSorting}
          name={"alphabetSorter"}
        />
        <Sorter
          value={"sort by date"}
          id="sortDate"
          toDoItems={oldValue}
          onSorting={handleSorting}
          name={"dateSorter"}
        />
      </div>
    </div>
  );
}

export default App;
