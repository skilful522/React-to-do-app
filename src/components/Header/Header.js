import React from 'react';
import style from'./Header.module.css'

class Header extends React.Component{
    render() {
        return (
            <div className={style.header} id='header'>
                <span id={style['firstLetter']}>R</span>
                <span id={style['secondLetter']}>e</span>
                <span id={style['thirdLetter']}>a</span>
                <span id={style['fourthLetter']}>c</span>
                <span id={style['fifthLetter']}>t</span>
                TodoList
            </div>
        );
    }
}

export {Header}