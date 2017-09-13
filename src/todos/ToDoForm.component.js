//todoForm.js
import React, { Component } from 'react';
import style from '../style';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', description: '', completed: false };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleStatusChange(e) {
        console.log('e.target.checked = ', e.target.checked);
        var status = e.target.checked !== undefined ? e.target.checked : false;
        this.setState({ completed: status });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('saving updates completed =', this.state.completed);
        let title = this.state.title.trim();
        let description = this.state.description.trim();
        let completed = this.state.completed;
        if (!title || !description) {
            return;
        }
        this.props.onTodoSubmit({ title: title, description: description, completed: completed });
        this.setState({ title: '', description: '', completed: false });
    }
    render() {
        return (
            <form style={ style.todoForm } onSubmit={ this.handleSubmit }>
                <input
                    type='text'
                    placeholder='Title…'
                    style={ style.todoFormTitle}
                    value={ this.state.title }
                    onChange={ this.handleTitleChange } />
                <input
                    type='text'
                    placeholder='Description…'
                    style={ style.todoFormDescription}
                    value={ this.state.description }
                    onChange={ this.handleDescriptionChange } />
                <input
                    type='checkbox'
                    style={ style.todoFormCompleted}
                    checked={ this.state.completed }
                    onChange={ this.handleStatusChange } />
                <input
                    type='submit'
                    style={ style.todoFormPost }
                    value='Add'/>
            </form>
        )
    }
}
export default TodoForm;