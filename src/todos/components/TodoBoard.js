//TodoBoard.js
import React, { Component } from 'react';
import axios from 'axios';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import style from '../../style';
import Paper from 'material-ui/Paper';


class TodoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.handleTodoDelete = this.handleTodoDelete.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }

    handleTodoDelete(id) {
        axios.delete(`${this.props.url}/${id}`)
            .then(res => {
                console.log('To Do deleted');
            })
            .catch(err => {
                console.error(err);
            });
    }
    handleTodoUpdate(id, todo) {
        console.log('getting ready to update:', todo);
        //sends the to do id and new title/status to our api
        axios.put(`${this.props.url}/${id}`, todo)
            .catch(err => {
                console.error(err);
            })
    }
    render() {
        return (
            <Paper zDepth={2}  style={ style.todoBoard }>
                <div>
                    <h2 style={ style.title }>To Do:</h2>
                    <TodoListContainer />
                    <TodoFormContainer />
                </div>
            </Paper>
        )
    }
}
export default TodoBoard;