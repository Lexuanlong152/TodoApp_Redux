export const addAction = (data) => {
    // console.log('aadd')
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}