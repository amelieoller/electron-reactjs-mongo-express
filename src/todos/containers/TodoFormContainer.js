import React from 'react'
import { connect } from 'react-redux'
import { createTodo, createTodoSuccess, fetchTodos, fetchTodosSuccess, createTodoFailure, resetNewTodo} from '../actions/index';
import style from '../../style';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

let TodoFormContainer = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.input.value.trim()) {
                        return
                    }
                    dispatch(createTodo({ title: input.input.value})).then((response) => {
                        console.log('dispatching createToDoSuccess');
                        if (!response.error) {
                            dispatch(fetchTodos()).then((response) => {
                                dispatch(fetchTodosSuccess(response.payload.data))
                            })
                        } else {
                            dispatch(createTodoFailure(response.payload.data))
                        }
                    });
                    input.input.value = ''
                }}
            >
                <TextField
                    id="text-field-default"
                    placeholder='To Do…'
                    style={ style.todoFormTextField }
                    ref={node => {
                        input = node
                    }}
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

TodoFormContainer = connect()(TodoFormContainer)

export default TodoFormContainer



