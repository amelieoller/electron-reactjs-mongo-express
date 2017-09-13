//Todo.js
import React, { Component } from 'react';
import style from '../style';
import CheckBox from 'react-material-icons/icons/toggle/check-box';
import CheckBoxOutline from 'react-material-icons/icons/toggle/check-box-outline-blank';
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state= {
            toBeUpdated: false,
            title: '',
            completed: false
        };
        //binding all our functions to this class
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.markComplete = this.markComplete.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }
    updateTodo(e) {
        e.preventDefault();
        //brings up the update field when we click on the update link.
        this.setState({ toBeUpdated: !this.state.toBeUpdated });
    }
    markComplete(e) {
        e.preventDefault();
        this.setState({ completed: true });
    }
    handleTodoUpdate(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        //if author or text changed, set it. if not, leave null and our PUT
        //request will ignore it.
        console.log('handling update, state=', this.state);
        let title = (this.state.title) ? this.state.title : null;
        let completed = (this.state.completed) ? this.state.completed : false;
        let todo = { title: title, completed: completed};
        console.log('this.props =', this.props);
        this.props.onTodoUpdate(id, todo);
        this.setState({
            toBeUpdated: !this.state.toBeUpdated,
            title: '',
            completed: false
        })
    }
    deleteTodo(e) {
        e.preventDefault();
        let id = this.props.uniqueID;
        this.props.onTodoDelete(id);
        console.log('to do has been deleted');
    }
    handleTitleChange(e) {
        console.log('setting title: ', e.target.value );
        this.setState({ title: e.target.value });
    }
    handleStatusChange(e) {
        console.log('setting completed: ', e.target.checked );
        this.setState({ completed: e.target.checked });
    }

    render() {
        let checkbox = null;
        if (this.props.completed) {
            checkbox = <CheckBox></CheckBox>
        } else {
            checkbox =  <CheckBoxOutline></CheckBoxOutline>
        }
        return (
            <TableRow>
                <TableRowColumn>
                    { this.props.title }
                </TableRowColumn>
                <TableRowColumn style={{textAlign: 'left'}}>
                    {checkbox}

                </TableRowColumn>
                <TableRowColumn>
                    <a style={ style.updateLink } href='#' onClick={ this.updateTodo }>update</a>
                    <a style={ style.markCompleteLink } href='#' onClick={ this.markComplete }>complete</a>
                    <a style={ style.deleteLink } href='#' onClick={ this.deleteTodo }>delete</a>
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
            </TableRow>
        )
    }
}
export default Todo;