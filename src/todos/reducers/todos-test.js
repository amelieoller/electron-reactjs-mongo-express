import {todos} from './todos';
import * as ActionType from '../actions/index';


describe('Reducer::Todos', function(){
    it('returns the initial_state as the default state', function(){
        // setup
        console.log('todos=', todos);
        let action = { type: 'unknown' };

        // execute
        let newState = todos(undefined, { type: 'unknown' });

        // verify
        expect(newState.todoList.todos.length).to.equal(0);
    });

});