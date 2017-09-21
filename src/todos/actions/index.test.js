import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import promise from 'redux-promise';

import * as actions from './index';

const middlewares = [promise];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
    const todos = [
        {"_id":"59c00800c396cc89349940b4","title":"REACT vs. Angular presentation","__v":0,"completed":false},
        {"_id":"59c00806c396cc89349940b5","title":"Unit Testing","__v":0,"completed":false},
        {"_id":"59c008e7c396cc89349940b6","title":"Update Taiga","__v":0,"completed":false},
        {"_id":"59c01388efb1728cb7cfe83a","title":"next one","__v":0,"completed":false},
        {"_id":"59c2b330d558f0d379750151","title":"blah blah","__v":0,"completed":false}
    ];

    it('should create an action for FETCH_TODOS_SUCCESS', () => {
        const expectedAction = {
            type: actions.FETCH_TODOS_SUCCESS,
            payload: todos
        }
        expect(actions.fetchTodosSuccess(todos).type).toEqual(expectedAction.type);
        expect(actions.fetchTodosSuccess(todos).payload).toEqual(expectedAction.payload);
    });

    it('should create an action for FETCH_TODOS_FAILURE', () => {
        const err = {
            message: 'bad request'
        }
        const expectedAction = {
            type: actions.FETCH_TODOS_FAILURE,
        };
        expect(actions.fetchTodosFailure(err).type).toEqual(expectedAction.type);
        expect(actions.fetchTodosFailure(err).message).toEqual(expectedAction.message);
    });

    it('should create an action for CREATE_TODO_SUCCESS', () => {
        const expectedAction = {
            type: actions.CREATE_TODO_SUCCESS,
            payload: todos
        }
        expect(actions.createTodoSuccess(todos).type).toEqual(expectedAction.type);
        expect(actions.createTodoSuccess(todos).payload).toEqual(expectedAction.payload);
    });

    it('should create an action for CREATE_TODO_FAILURE', () => {
        const err = {
            message: 'bad request'
        }
        const expectedAction = {
            type: actions.CREATE_TODO_FAILURE,
        };
        expect(actions.createTodoFailure(err).type).toEqual(expectedAction.type);
        expect(actions.createTodoFailure(err).message).toEqual(expectedAction.message);
    });

    it('should create an action for DELETE_TODO_SUCCESS', () => {
        const expectedAction = {
            type: actions.DELETE_TODO_SUCCESS,
            payload: todos
        }
        expect(actions.deleteTodoSuccess(todos).type).toEqual(expectedAction.type);
        expect(actions.deleteTodoSuccess(todos).payload).toEqual(expectedAction.payload);
    });

    it('should create an action for DELETE_TODO_FAILURE', () => {
        const err = {
            message: 'bad request'
        }
        const expectedAction = {
            type: actions.DELETE_TODO_FAILURE,
        };
        expect(actions.deleteTodoFailure(err).type).toEqual(expectedAction.type);
        expect(actions.deleteTodoFailure(err).message).toEqual(expectedAction.message);
    });

    describe(' - asynchrounous actions', () => {
        it('should create an action for FETCH_TODOS', () => {
            const mock = new MockAdapter(axios);
            mock.onGet('http://localhost:8080/api/todos/').reply(200, todos);

            const expectedActions = [
                { type: actions.FETCH_TODOS }
            ];
            const store = mockStore({ todos: [] })
            return store.dispatch(actions.fetchTodos()).then(() => {
                // return of async actions
                expect(store.getActions().length).toEqual(expectedActions.length);
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
            })
        });

        it('should create an action for CREATE_TODO', () => {
            const mock = new MockAdapter(axios);
            mock.onPost('http://localhost:8080/api/todos/').reply(200, todos[0]);

            const expectedActions = [
                { type: actions.CREATE_TODO }
            ];
            const store = mockStore({ todos: [] })
            return store.dispatch(actions.createTodo(todos[0])).then(() => {
                // return of async actions
                expect(store.getActions().length).toEqual(expectedActions.length);
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
            })
        });

        it('should create an action for DELETE_TODO', () => {
            const mock = new MockAdapter(axios);
            mock.onDelete('http://localhost:8080/api/todos/').reply(200, todos[0]);

            const expectedActions = [
                { type: actions.DELETE_TODO }
            ];
            const store = mockStore({ todos: [] })
            return store.dispatch(actions.deleteTodo(todos[0])).then(() => {
                // return of async actions
                expect(store.getActions().length).toEqual(expectedActions.length);
                expect(store.getActions()[0].type).toEqual(expectedActions[0].type);
            })
        });
    })
});