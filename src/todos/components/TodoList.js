//TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import style from '../../style';
import {
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TableHeaderColumn
} from 'material-ui/Table';

import TodoContainer from '../containers/TodoContainer';




class TodoList extends Component {
    componentWillMount() {
        this.props.fetchTodos();
    }
    renderTodos(todos) {
        let todoNodes = todos.map(todo => {
            return (
                <TodoContainer
                    title={ todo.title }
                    completed={ todo.completed }
                    uniqueID={ todo['_id'] }
                    onTodoDelete={ this.props.onTodoDelete }
                    onTodoUpdate={ this.props.onTodoUpdate }
                    key={ todo['_id'] }>
                </TodoContainer>
            )
        })
        return (
            <Table style={style.todoTable}>
                <TableBody>
                    { todoNodes }
                </TableBody>
            </Table>
        )
    }
    render() {
        const { todos, loading, error } = this.props.todoList;

        if(loading) {
            return <div className="container"><h3>Loading To Do list...</h3></div>
        } else if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            this.renderTodos(todos)
        );
    }
}
export default TodoList;