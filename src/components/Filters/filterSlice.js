const initialState = {
   
        search: '',
        status: 'All',
        priority: []
    
}

const filterReducer = (state = initialState, action) => {
    // console.log(state, action,action.type);
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                    ...state,
                    search : action.payload
                }

        case 'filters/statusFilterChange':
            return{
                ...state,
                status : action.payload
            }
        default:
            return state;
    }
}

export default filterReducer;