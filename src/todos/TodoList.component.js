//TodoList.js
import React, { Component } from 'react';
import Todo from './Todo.component';
import style from '../style';

class TodoList extends Component {
    render() {
        let todoNodes = this.props.data.map(todo => {
            return (
                    <Todo
                        title={ todo.title }
                        completed={ todo.completed }
                        uniqueID={ todo['_id'] }
                        onTodoDelete={ this.props.onTodoDelete }
                        onTodoUpdate={ this.props.onTodoUpdate }
                        key={ todo['_id'] }>
                            { todo.title }
                            { todo.completed }
                    </Todo>
            )
        })
        return (
            <table style={ style.todoList }>
                <tbody>
                    { todoNodes }
                </tbody>
            </table>

        )
    }
}
export default TodoList;