import React from 'react'
import style from './ToDoList.module.css'
import {ToDoItem} from "../ToDoItem/ToDoItem";

class ToDoList extends React.Component {
    render() {
        return (
            <div id={style['toDoList']}>
                {this.props.toDoItems.map((item, index) => {
                    return <ToDoItem
                        text={item.inputValue}
                        date={item.dateValue}
                        key={index}
                        id={index}/>
                })}
            </div>
        );
    }
}

export {ToDoList}