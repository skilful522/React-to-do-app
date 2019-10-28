import React from "react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { NewToDoItem } from "./components/NewToDoItem/NewToDoItem";
import { Sorter } from "./components/Sorter/Sorter";
import { Filter } from "./components/Filter/Filter";
import { MultiFilter } from "./components/MultiFilter/MultiFilter";
import "./App.css";

function App() {
  const [toDoItems, setValue] = useState([]);
  const [inputFilterValue, setInputFilterValue] = useState("");
  const [dateFilterValue, setDateFilterValue] = useState("");
  const [filteredList, setFilteredList] = useState(toDoItems);
  const handleAddNewToDoItem = newToDoItem =>
    setValue(toDoItems => [newToDoItem, ...toDoItems]);
  const handleSorting = sortedToDoItems => {
    setValue([...sortedToDoItems]);
  };
  const handleFiltering = filteredToDoItems => {
    setFilteredList([...filteredToDoItems]);
  };

  const getFilterTextValue = textValue => setInputFilterValue(textValue);
  const getFilterDateValue = dateValue => setDateFilterValue(dateValue);

  return (
    <div id="mainContainer">
      <Header />
      <ToDoList toDoItems={toDoItems} />
      <NewToDoItem onAddNewToDoItem={handleAddNewToDoItem} />
      <div id="sortButtonsContainer">
        <Sorter
          value={"sort by alphabet"}
          id="sortAlphabet"
          toDoItems={toDoItems}
          onSorting={handleSorting}
          name={"alphabetSorter"}
        />
        <Sorter
          value={"sort by date"}
          id="sortDate"
          toDoItems={toDoItems}
          onSorting={handleSorting}
          name={"dateSorter"}
        />
      </div>
      <div id="filtersContainer">
        <Filter
          id="filterInput"
          placeholder="filter by input"
          name="inputValue"
          type="text"
          toDoItems={toDoItems}
          onFiltering={handleFiltering}
          onChangeText={getFilterTextValue}
        />
        <Filter
          id="filterDate"
          name="dateValue"
          type="date"
          toDoItems={toDoItems}
          onFiltering={handleFiltering}
          onChangeDate={getFilterDateValue}
        />
        <MultiFilter
          id="multiFilter"
          name="multiFilter"
          toDoItems={toDoItems}
          onFiltering={handleFiltering}
          value="MultiFilter"
          inputFilterValue={inputFilterValue}
          dateFilterValue={dateFilterValue}
        />
      </div>
    </div>
  );
}

export default App;
