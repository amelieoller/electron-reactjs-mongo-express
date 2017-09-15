import { connect } from 'react-redux'
import { deleteTodo, deleteTodoFailure, updateTodo, updateTodoFailure, fetchTodos, fetchTodosSuccess, fetchTodosFailure } from '../actions/index';
import Todo from "../components/Todo";


const mapStateToProps = (state) => {
    return {
        todoList: state.todos.todoList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => {
            dispatch(fetchTodos()).then((response) => {
                if (!response.error) {
                    dispatch(fetchTodosSuccess(response.payload.data))
                } else {
                    dispatch(fetchTodosFailure(response.payload.data));
                }
            });
        },
        deleteTodo: (id) => {
            console.log('deleting id: ', id);
            dispatch(deleteTodo(id)).then((response) => {
                if (!response.error) {
                    console.log('Delete successful');
                    dispatch(fetchTodos()).then((response) => {
                        dispatch(fetchTodosSuccess(response.payload.data))
                    })
                } else {
                    console.log('Delete failure');
                    dispatch(deleteTodoFailure(response.payload.data))
                }
            });
        },
        updateTodo: (id, todo) => {
            dispatch(updateTodo(id, todo)).then((response) => {
                if (!response.error) {
                    console.log('Update successful');
                    dispatch(fetchTodos()).then((response) => {
                        dispatch(fetchTodosSuccess(response.payload.data))
                    });
                } else {
                    console.log('Update failure');
                    dispatch(updateTodoFailure(response.payload.data))
                }
            });
        }
    }
}

const TodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)

export default TodoContainer;