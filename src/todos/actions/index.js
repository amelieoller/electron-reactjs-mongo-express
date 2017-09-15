import axios from 'axios';

//To Do list
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const RESET_TODOS = 'RESET_TODOS';

//Create new to do
export const CREATE_TODO = 'CREATE_TODO';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';
export const RESET_NEW_TODO = 'RESET_NEW_TODO';

//Fetch to do
export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';
export const RESET_ACTIVE_TODO = 'RESET_ACTIVE_TODO';

//Delete to do
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export const RESET_DELETED_TODO = 'RESET_DELETED_TODO';

const ROOT_URL = 'http://localhost:8080/api';
export function fetchTodos() {
    const request = axios.get('http://localhost:8080/api/todos/');
    return {
        type: FETCH_TODOS,
        payload: request
    };
}

export function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    };
}

export function fetchTodosFailure(error) {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error
    };
}

export function resetTodoFields() {
    return {
        type: RESET_TODO_FIELDS
    }
}


export function createTodo(newTodo) {
    const request = axios.post('http://localhost:8080/api/todos', newTodo);

    return {
        type: CREATE_TODO,
        payload: request
    };
}

export function createTodoSuccess(newTodo) {
    console.log('create todo success: ', newTodo);
    return {
        type: CREATE_TODO_SUCCESS,
        payload: newTodo
    };
}

export function createTodoFailure(error) {
    return {
        type: CREATE_TODO_FAILURE,
        payload: error
    };
}

export function resetNewTodo() {
    return {
        type: RESET_NEW_TODO
    }
}


export function resetDeletedTodo() {
    return {
        type: RESET_DELETED_TODO
    }
}


export function fetchTodo(id) {
    const request = axios.get('http://localhost:8080/api/todos/' + id);

    return {
        type: FETCH_TODO,
        payload: request
    };
}


export function fetchTodoSuccess(activeTodo) {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: activeTodo
    };
}

export function fetchTodoFailure(error) {
    return {
        type: FETCH_TODO_FAILURE,
        payload: error
    };
}

export function resetActiveTodo() {
    return {
        type: RESET_ACTIVE_TODO
    }
}


export function deleteTodo(id) {
    // const request = axios({
    //     method: 'delete',
    //     url:'${ROOT_URL}/todos/${id}',
    // });
    const request = axios.delete('http://localhost:8080/api/todos/' + id)

    return {
        type: DELETE_TODO,
        payload: request
    };
}

export function deleteTodoSuccess(deletedTodo) {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: deletedTodo
    };
}

export function deleteTodoFailure(response) {
    return {
        type: DELETE_TODO_FAILURE,
        payload: response
    };
}