import React from 'react'
import PropTypes from 'prop-types'
import style from './NewToDoItem.module.css'
import moment from "moment";

class NewToDoItem extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.state = {
            inputValue: '',
            dateValue: moment().format('YYYY-MM-DD'),
        };
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    getInputValue = (e) => {
        this.setState({[e.target.name]: e.target.value })
    };

    validate = () => {
        const {inputValue} = this.state;

        if (inputValue.trim()) {
            return true;
        } else {
            return false;
        }
    };

    onReset = () => {
        this.setState({inputValue: ''});
    };

    addButtonHandler = () => {
        const { inputValue, dateValue } = this.state;

        this.props.onAddNewToDoItem({inputValue, dateValue});
        this.onReset();
        this.focusTextInput();
    };

    render() {
        return (
            <div className={style['newToDoItem']}>
                <input className={style['toDoInputText']}
                       ref={this.textInput}
                       value={this.state.inputValue}
                       name='inputValue'
                       onChange={this.getInputValue}/>
                <input className={style['toDoInputDate']}
                       type='date'
                       name='dateValue'
                       onChange={this.getInputValue}
                       value={this.state.dateValue}/>
                <button
                    className={style['addButton']}
                    disabled ={!this.validate()}
                    onClick={this.addButtonHandler}>add
                </button>
            </div>
        );
    }
}

NewToDoItem.propTypes = {
    onAddNewToDoItem: PropTypes.func.isRequired
};

export {NewToDoItem}