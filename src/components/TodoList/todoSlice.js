const initialState =[
        {
            id: 1, name: 'Learn PHP', completed: false, priority: 'High'
        },
        {
            id: 2, name: 'Learn JS', completed: true, priority: 'Medium'
        },
        {
            id: 3, name: 'Learn Ruby', completed: false, priority: 'Low'
        },
    ]

const todoReducer = (state = initialState, action) => {
    // console.log(state, action,action.type);
    switch (action.type) {
        case 'todoList/addTodo':
            // console.log('add')
            return [ ...state, action.payload]
    
        
        default:
            return state;
    }
}

export default todoReducer;