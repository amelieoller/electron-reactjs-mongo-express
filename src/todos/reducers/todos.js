import {
    FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, RESET_TODOS,
    FETCH_TODO, FETCH_TODO_SUCCESS,  FETCH_TODO_FAILURE, RESET_ACTIVE_TODO,
    CREATE_TODO, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE, RESET_NEW_TODO,
    DELETE_TODO, DELETE_TODO_SUCCESS, DELETE_TODO_FAILURE, RESET_DELETED_TODO,
    RESET_TODO_FIELDS
} from '../actions/index';


const INITIAL_STATE = {
    todoList: {todos: [], error: null, loading: false},
    newTodo:{todo: null, error: null, loading: false},
    activeTodo:{todo: null, error: null, loading: false},
    deletedTodo: {todo: null, error: null, loading: false}
};

const todos = (state = INITIAL_STATE, action) => {
    let error;
    switch(action.type) {

        case FETCH_TODOS:// start fetching and set loading = true
            return { ...state, todoList: {todos:[], error: null, loading: true} };
        case FETCH_TODOS_SUCCESS:// return list of todos and make loading = false
            return { ...state, todoList: {todos: action.payload, error: null, loading: false} };
        case FETCH_TODOS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, todoList: {todos: [], error: error, loading: false} };
        case RESET_TODOS:// reset todoList to initial state
            return { ...state, todoList: {todos: [], error: null, loading: false} };

        case FETCH_TODO:
            return { ...state, activeTodo:{...state.activeTodo, loading: true}};
        case FETCH_TODO_SUCCESS:
            return { ...state, activeTodo: {todo: action.payload, error: null, loading: false}};
        case FETCH_TODO_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, activeTodo: {todo: null, error: error, loading:false}};
        case RESET_ACTIVE_TODO:
            return { ...state, activeTodo: {todo: null, error: null, loading: false}};

        case CREATE_TODO:
            return {...state, newTodo: {...state.newTodo, loading: true}}
        case CREATE_TODO_SUCCESS:
            return {...state, newTodo: {todo: action.payload, error: null, loading: false}}
        case CREATE_TODO_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, newTodo: {todo: null, error: error, loading: false}}
        case RESET_NEW_TODO:
            return {...state,  newTodo:{todo: null, error: null, loading: false}}

        case DELETE_TODO:
            return {...state, deletedTodo: {...state.deletedTodo, loading: true}}
        case DELETE_TODO_SUCCESS:
            return {...state, deletedTodo: {todo: action.payload, error: null, loading: false}}
        case DELETE_TODO_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {...state, deletedTodo: {todo: null, error: error, loading: false}}
        case RESET_DELETED_TODO:
            return {...state,  deletedTodo:{todo: null, error: null, loading: false}}

        case RESET_TODO_FIELDS:
            return {...state, newTodo:{...state.newTodo, error: null, loading: null}}
        default:
            return state;
    }
}

export default todos