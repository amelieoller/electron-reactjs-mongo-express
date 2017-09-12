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
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

export default class App extends React.Component {
    render() {
        return (
            <CommentBox
                url='http://localhost:8080/api/comments'
                pollInterval={2000} />
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