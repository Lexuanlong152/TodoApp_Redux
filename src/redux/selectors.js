import { createSelector } from 'reselect';

export const todoListSelector = (state)=> {
    const todoSearch= state.todoList.filter((todo)=>{
        console.log(todo);
        return todo.name.includes( state.filters.search)
    })
    return todoSearch;
};

export const searchTextSelector = (state) => state.filters.search;

// export const searchTextSelector = (state) => state.filters.search;
// export const statusSelector = (state) => state.filters.status;
// export const todoListSelector = (state) => state.todoList;

// export const todoIncludeSelector = createSelector(
//     todoListSelector,
//     statusSelector,
//     searchTextSelector,
//     (todoList, status, searchText) => {
//         console.log(todoList);
//         return todoList.filters((todo) => {
//             console.log (status,searchText)
//             console.log(todo);
//             if (status === 'All') {
//                 return todo.name.includes(searchText);
//             }
//             if( status=== "Completed"){
//                 return todo.name.includes(searchText) && todo.completed;
//             }
//             if (status === "Todo"){
//                 return todo.name.includes(searchText) && !todo.completed;
//             }      
//         }
//         )
//     }
// ) 
