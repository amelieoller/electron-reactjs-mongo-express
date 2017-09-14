// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import App from "./src/todos/components/App";

const React = require('react');
const ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import configureStore from './src/todos/store/configureStore.js';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));