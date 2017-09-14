//todoForm.js
import React, { Component } from 'react';
import style from '../../style';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '', completed: false };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
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
        let completed = this.state.completed;
        if (!title ) {
            return;
        }
        this.props.onTodoSubmit({ title: title, completed: completed });
        this.setState({ title: '', completed: false });
    }

    render() {
        return (
                <form style={ style.todoForm } onSubmit={ this.handleSubmit }>
                    <TextField
                        id="text-field-default"
                        placeholder='To Do…'
                        value={ this.state.title }
                        style={ style.todoFormTextField }
                        onChange={ this.handleTitleChange }
                    />
                    <RaisedButton label="Add" primary={true}  style={ style.todoFormButton } type='submit' />

                </form>
        )
    }
}
export default TodoForm;