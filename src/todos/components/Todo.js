//Todo.js
import React, { Component } from 'react';
import style from '../../style';
import CheckBox from 'react-material-icons/icons/toggle/check-box';
import CheckBoxOutline from 'react-material-icons/icons/toggle/check-box-outline-blank';
import Delete from 'react-material-icons/icons/action/delete';
import IconButton from 'material-ui/IconButton';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state= {
            toBeUpdated: false,
            title: props.title,
            completed: props.completed
        };
        //binding all our functions to this class
        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }
    toggleComplete(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        let title = (this.state.title) ? this.state.title : null;
        let completed = !this.state.completed ;
        this.setState({ completed: !this.state.completed });
        let todo = { title: title, completed: completed};
        this.props.updateTodo(id, todo);
    }
    deleteTodo(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        console.log('deleting todo for: ', this.state);
        this.props.deleteTodo(id);
    }

    render() {
        let checkbox = null;
        if (this.state.completed) {
            checkbox = <IconButton iconStyle={style.completedStyle} onClick={ this.toggleComplete }><CheckBox /></IconButton>
        } else {
            checkbox =  <IconButton iconStyle={style.completedStyle} onClick={ this.toggleComplete } ><CheckBoxOutline /></IconButton>
        }
        return (
            <TableRow>
                <TableRowColumn>
                    <IconButton iconStyle={ style.deleteLink } onClick={ this.deleteTodo }>
                        <Delete />
                    </IconButton>
                    <span style={ this.state.completed ? style.completedToDoStyle : style.toDoStyle }>
                        { this.props.title }
                    </span>
                </TableRowColumn>
                <TableRowColumn>
                    {checkbox}
                </TableRowColumn>

            </TableRow>
        )
    }
}

export default Todo;