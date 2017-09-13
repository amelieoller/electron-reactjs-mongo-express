//TodoBoard.js
import React, { Component } from 'react';
import axios from 'axios';
import TodoList from './TodoList.component';
import TodoForm from './ToDoForm.component';
import style from '../style';

class TodoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.loadTodosFromServer = this.loadTodosFromServer.bind(this);
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.handleTodoDelete = this.handleTodoDelete.bind(this);
        this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    }
    loadTodosFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }
    handleTodoSubmit(todo) {
        let todos = this.state.data;
        todo.id = Date.now();
        let newTodos = todos.concat([todo]);
        this.setState({ data: newTodos });
        axios.post(this.props.url, todo)
            .catch(err => {
                console.error(err);
                this.setState({ data: todos });
            });
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
        //sends the to do id and new title/description/status to our api
        axios.put(`${this.props.url}/${id}`, todo)
            .catch(err => {
                console.log(err);
            })
    }
    componentDidMount() {
        this.loadTodosFromServer();
        setInterval(this.loadTodosFromServer, this.props.pollInterval);
    }
    render() {
        return (
            <div style={ style.todoBoard }>
                <h2 style={ style.title }>To Dos:</h2>
                <TodoList
                    onTodoDelete={ this.handleTodoDelete }
                    onTodoUpdate={ this.handleTodoUpdate }
                    data={ this.state.data }/>
                <TodoForm onTodoSubmit={ this.handleTodoSubmit }/>
            </div>
        )
    }
}
export default TodoBoard;