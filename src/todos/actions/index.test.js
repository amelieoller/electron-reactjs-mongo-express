import expect from 'expect';
import * as actions from './index';

describe('Actions', () => {
    it('should create a FETCH_TODOS_FAILURE action', () => {
        const err = {
            message: 'bad request'
        }
        const expectedAction = {
            type: 'FETCH_TODOS_FAILURE',
        };
        expect(actions.fetchTodosFailure(err).type).toEqual(expectedAction.type);
    });

    xit('creates an action to fetch the todos', () => {
        const balance = 0;
        const expectedAction =  { type: constants.SET_BALANCE, balance }

        expect(actions.setBalance(balance)).toEqual(expectedAction);
    })
});