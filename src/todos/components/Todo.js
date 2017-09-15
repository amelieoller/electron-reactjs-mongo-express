//Todo.js
import React, { Component } from 'react';
import style from '../../style';
import CheckBox from 'react-material-icons/icons/toggle/check-box';
import CheckBoxOutline from 'react-material-icons/icons/toggle/check-box-outline-blank';
import ModeEdit from 'react-material-icons/icons/editor/mode-edit';
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
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }
    updateTodo(e) {
        e.preventDefault();
        //brings up the update field when we click on the update link.
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }
    toggleComplete(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        let title = (this.state.title) ? this.state.title : null;
        let completed = !this.state.completed ;
        this.setState({ completed: !this.state.completed });
        let todo = { title: title, completed: completed};
        this.props.onTodoUpdate(id, todo);
        this.setState(todo);
    }
    handleTodoUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        let title = (this.state.title) ? this.state.title : null;
        let completed = (this.state.completed) ? this.state.completed : false;
        let todo = { title: title, completed: completed};
        this.props.onTodoUpdate(id, todo);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            title: this.state.title,
            completed: this.state.completed
        })
    }
    deleteTodo(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onTodoDelete(id);
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleStatusChange(e) {
        this.setState({ completed: e.target.checked });
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
                    <IconButton iconStyle={ style.updateLink } onClick={ this.updateTodo }>
                        <ModeEdit />
                    </IconButton>
                    <IconButton iconStyle={ style.deleteLink } onClick={ this.deleteTodo }>
                        <Delete />
                    </IconButton>
                    <span style={ this.state.completed ? style.completedToDoStyle : style.toDoStyle }>{ this.props.title }</span>
                    { (this.state.toBeUpdated)
                        ? (<form onSubmit={ this.handleTodoUpdate }>
                            <input
                                type='text'
                                placeholder='Update title…'
                                style={ style.todoFormTitle }
                                value={ this.state.title }
                                onChange= { this.handleTitleChange } />
                            <input
                                type='submit'
                                style={ style.todoFormPost }
                                value='Update' />
                        </form>)
                        : null }
                </TableRowColumn>
                <TableRowColumn>
                    {checkbox}
                </TableRowColumn>

            </TableRow>
        )
    }
}
export default Todo;