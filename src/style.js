//style.js
const style = {
    body: {
        fontFamily: 'Roboto'
    },
    todoBoard: {
        margin: '50px',
        paddingTop: '20px'
    },
    todoTable: {
        width:'80vw',
        margin:'5px 0px 5px 20px',
        fontFamily:'Helvetica, sans-serif'
    },
    title: {
        marginLeft: '50px',
        textAlign:'left',
        textTransform:'uppercase'
    },
    todoList: {
        border:'1px solid #f1f1f1',
        padding:'0 12px',
        maxHeight:'70vh',
        overflow:'scroll'
    },
    todo: {
        backgroundColor:'#fafafa',
        margin:'10px',
        padding:'3px 10px',
        fontSize:'.85rem'
    },
    todoForm: {
        marginTop: '50px',
        marginLeft:'50px',
        paddingBottom: '50px',
        justifyContent:'space-between'
    },
    TodoContainer: {
        marginTop: '50px',
        marginLeft:'50px',
        paddingBottom: '50px',
        justifyContent:'space-between'
    },
    todoFormTitle: {
        minWidth:'150px',
        margin:'3px',
        padding:'0 10px',
        borderRadius:'3px',
        height:'40px',
        flex:'2'
    },
    todoFormTextField: {
        marginLeft:' 25px',
        minWidth:'380px',
        fontFamily: 'Indie Flower',
        fontSize: '1.5em'
    },
    todoFormButton: {
        marginLeft:'15px'
    },
    todoFormCompleted: {
        margin:'3px',
        padding:'0 10px',
        height:'40px',
        flex:'2'
    },
    todoFormPost: {
        minWidth:'75px',
        flex:'1',
        height:'40px',
        margin:'5px 3px',
        fontSize:'1rem',
        backgroundColor:'#A3CDFD',
        borderRadius:'3px',
        color:'#fff',
        textTransform:'uppercase',
        letterSpacing:'.055rem',
        border:'none'
    },
    deleteLink: {
        color: '#777',
        fontSize:'8px'
    },
    updateLink: {
        color: '#777',
        fontSize:'8px'
    },
    toDoStyle: {
        fontFamily: 'Indie Flower',
        fontSize: '2em',
        color: '#00BCD4',
        marginLeft: '10px',
        marginTop: '-10px',
        textDecoration: 'none'
    },
    completedToDoStyle: {
        fontFamily: 'Indie Flower',
        fontSize: '2em',
        color: '#00BCD4',
        marginLeft: '10px',
        marginTop: '-10px',
        textDecoration: 'line-through'
    },
    completedStyle: {
        color: '#777',
        textAlign: 'left'
    },
    exampleEnter: {
        opacity: "0.01"
    },
    exampleEnterActive: {
        opacity: '1',
        transition: 'opacity 500ms ease-in'
    },
    exampleLeave: {
        opacity: '1'
    },
    exampleLeaveActive: {
        opacity: '0.01',
        transition: 'opacity 300ms ease-in'
    }
}
module.exports = style;