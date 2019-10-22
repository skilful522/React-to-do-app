import React from 'react';
import style from './App.module.css';
import {Header} from "./components/Header/Header";
import {ToDoList} from "./components/ToDoList/ToDoList";
import {NewToDoItem} from "./components/NewToDoItem/NewToDoItem";

class App extends React.Component {
        state = {
        toDoItems: []
    };

    handleAddNewToDoItem = newToDoItem => {
        this.setState(oldState => {
            return {
                toDoItems: [newToDoItem].concat(oldState.toDoItems)
            }
        })
    };

    render() {
        return (
            <div id={style['main-container']}>
                <Header/>
                <ToDoList toDoItems={this.state.toDoItems}/>
                <NewToDoItem onAddNewToDoItem={this.handleAddNewToDoItem}/>
            </div>
        );
    }
}

export default App;
