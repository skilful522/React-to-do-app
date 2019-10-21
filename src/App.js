import React from 'react';
import style from './App.module.css';
import {Header} from "./components/Header/Header";
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoItem} from "./components/NewToDoItem/NewToDoItem";
import moment from 'moment'

class App extends React.Component {

  render() {
      const date = moment().format('YYYY-MM-DD');
    return (
        <div id={style['main-container']}>
          <Header/>
          <ToDoList/>
          <NewToDoItem date={date}/>
        </div>
    );
  }
}

export default App;
