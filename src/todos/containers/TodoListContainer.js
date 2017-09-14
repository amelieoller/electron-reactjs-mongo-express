import { connect } from 'react-redux'
import { fetchTodos, fetchTodosSuccess, fetchTodosFailure } from '../actions/index';
import TodoList from '../components/TodoList';


const mapStateToProps = (state) => {
    console.log('*** mapStateToProps *** state =', state);
    return {
        todoList: state.todos.todoList
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log('*** mapDispatchToProps ***');
    return {
        fetchTodos: () => {
            dispatch(fetchTodos()).then((response) => {
                !response.error ? dispatch(fetchTodosSuccess(response.payload.data)) : dispatch(fetchTodosFailure(response.payload.data));
            });
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer;