import { createSelector } from "reselect";

// export const todoListSelector = (state)=> {
//     const todoSearch= state.todoList.filter((todo)=>{
//         console.log(todo);
//         return todo.name.includes( state.filters.search)
//     })
//     return todoSearch;
// };

// export const searchTextSelector = (state) => state.filters.search;

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoIncludeSelector = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  prioritySelector,
  (todoList, status, searchText, priority) => {
    console.log(todoList);
    return todoList.filter((todo) => {
      console.log(status, searchText);
      console.log(todo);
      if (status === "All") {
        if (priority.length) {
          return (
            todo.name.includes(searchText) && priority.includes(todo.priority)
          );
        }
        return todo.name.includes(searchText);
      }
      if (status === "Completed") {
        if (priority.length) {
          return (
            todo.name.includes(searchText) &&
            todo.completed &&
            priority.includes(todo.priority)
          );
        }
        return todo.name.includes(searchText) && todo.completed;
      }
      if (status === "Todo") {
        if (priority.length) {
          return (
            todo.name.includes(searchText) &&
            todo.completed &&
            priority.includes(todo.priority)
          );
        }
        return todo.name.includes(searchText) && !todo.completed;
      }
    });
  }
);
