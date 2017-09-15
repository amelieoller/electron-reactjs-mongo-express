//todoForm.js
import React, { Component, PropTypes } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { createTodo, createTodoSuccess, createTodoFailure, resetNewTodo } from '../actions/index';
import style from '../../style';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import renderTextArea from './renderTextArea';

const createNewTodo = (values, dispatch) => {
    console.log('creating new todos, values=', values);
    return dispatch(createTodo(values))
        .then(result => {
            // Note: Error's "data" is in result.payload.response.data (inside "response")
            // success's "data" is in result.payload.data
            if (result.payload.response && result.payload.response.status !== 200) {
                dispatch(createTodoFailure(result.payload.response.data));
                throw new SubmissionError(result.payload.response.data);
            }
            //let other components know that everything is fine by updating the redux` state
            dispatch(createTodoSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
        });
}

class TodoForm extends Component {

    componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        this.props.resetMe();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newTodo.post && !nextProps.newTodo.error) {

        }
    }
    renderError(newTodo) {
        if (newTodo && newTodo.error && newTodo.error.message) {
            return (
                <div className="alert alert-danger">
                    { newTodo ? newTodo.error.message : '' }
                </div>
            );
        } else {
            return <span></span>
        }
    }


    render() {
        console.log('rendering form, this.props=', this.props);
        const {newTodo, onSubmit, resetMe, } = this.props;
        return (
            <div className='container'>
                { this.renderError(newTodo) }
                <form
                    style={ style.todoForm }
                    onSubmit={ onSubmit(createNewTodo) }>
                    <Field
                        name='title'
                        placeholder='To Do…'
                        style={ style.todoFormTextField }
                        component={ renderTextArea }
                    />
                    <RaisedButton
                        label="Add"
                        primary={true}
                        style={ style.todoFormButton }
                        type='submit' />
                </form>
            </div>
        )
    }
}

export default TodoForm;


