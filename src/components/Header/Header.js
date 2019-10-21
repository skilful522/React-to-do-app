import React from 'react';
import style from'./Header.module.css'

class Header extends React.Component{
    render() {
        return (
            <div className={style.header} id='header'>
                <span id={style['first-letter']}>R</span>
                <span id={style['second-letter']}>e</span>
                <span id={style['third-letter']}>a</span>
                <span id={style['fourth-letter']}>c</span>
                <span id={style['fifth-letter']}>t</span>
                TodoList
            </div>
        );
    }
}

export {Header}