//TodoBoard.js
import React, { Component } from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import style from '../../style';
import Paper from 'material-ui/Paper';


class TodoBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    render() {
        return (
            <Paper zDepth={2}  style={ style.todoBoard }>
                <div>
                    <h2 style={ style.title }>To Do:</h2>
                    <TodoListContainer
                        data={ this.state.data }
                    />
                    <TodoFormContainer />
                </div>
            </Paper>
        )
    }
}
export default TodoBoard;