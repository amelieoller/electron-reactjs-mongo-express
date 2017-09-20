import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import todoApp from '../reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export default function configureStore(initialState) {

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return createStore(
        todoApp,
        initialState,
        applyMiddleware(
            promise,
            logger
        )
    )
};