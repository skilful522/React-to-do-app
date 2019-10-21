import React from 'react'
import style from './ToDoItem.module.css'

class ToDoItem extends React.Component {
    render() {
        return (
            <div className={style['toDoItem']}>
                <div className={style['taskDateContainer']}>
                <div className={style['toDoText']}>{this.props.text}</div>
                <div className={style['toDoDate']}>{this.props.date}</div>
                </div>
                <button className={style['doneToDo']}>✓</button>
                <button className={style['removeToDo']}>✖</button>
            </div>
        );
    }
}

export {ToDoItem}

