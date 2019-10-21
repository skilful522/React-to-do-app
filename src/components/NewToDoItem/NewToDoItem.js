import React from 'react'
import style from './newToDoItem.module.css'

class NewToDoItem extends React.Component{
    state = {
        text: ''
    };

    getTextValue = (e) => {
        this.setState({text: e.currentTarget.value})
    };

    render() {
        const {date} = this.props.date;
        return (
            <div className={style['new-todo-item']}>
                <input className={style['toDo-input-text']} onKeyDown={this.getTextValue}></input>
                <input className={style['toDo-input-date']} type='date'>{date}</input>
                <button className={style['add-button']}>add</button>
            </div>
        );
    }
}

export {NewToDoItem}