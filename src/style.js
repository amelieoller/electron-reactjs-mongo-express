//style.js
const style = {
    body: {
        fontFamily: 'Roboto'
    },
    todoTable: {
        width:'80vw',
        margin:'5px 0px 5px 20px',
        fontFamily:'Helvetica, sans-serif'
    },
    title: {
        textAlign:'center',
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
    todoFormTitle: {
        minWidth:'150px',
        margin:'3px',
        padding:'0 10px',
        borderRadius:'3px',
        height:'40px',
        flex:'2'
    },
    todoFormTextField: {
        minWidth:'380px'
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
        hover: {
            color: 'green'
        },
        paddingTop: '10px',
        color: '#777',
        fontSize:'8px'
    },
    updateLink: {
        hover: {
            color: 'green'
        },
        paddingTop: '10px',
        color: '#777',
        fontSize:'8px'
    },
    toDoStyle: {
        fontFamily: 'Indie Flower',
        fontSize: '2em',
        color: '#00BCD4',
        marginLeft: '10px',
        marginTop: '-10px'
    },
    completedStyle: {
        color: '#777',
        textAlign: 'left'
    }
}
module.exports = style;