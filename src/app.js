// import React from 'react';
//
// export default class App extends React.Component {
//     render() {
//         return (<div>
//             Hello World!
//             <a href="https://willowtreeapps.com/careers"> Come work with me.</a>
//         </div>);
//     }
// }

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TodoBoard from './todos/TodoBoard.component';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <TodoBoard
                    url='http://localhost:8080/api/todos'
                    pollInterval={20000} />
            </MuiThemeProvider>
        );
    }
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import CommentBox from './CommentBox';
// ReactDOM.render(
//     <CommentBox
//         url='http://localhost:3001/api/comments'
//         pollInterval={2000} />,
//     document.getElementById('app')
// );