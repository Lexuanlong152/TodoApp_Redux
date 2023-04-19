export const addAction = (data) => {
  // console.log('aadd')
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const ToggleTodoStatus = (todoId) => {
  // console.log('aadd')
  return {
    type: "todoList/ToggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priority) => {
  return {
    type: "filters/priorityFilterChange",
    payload: priority,
  };
};
