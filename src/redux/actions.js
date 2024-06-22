const ADD_TODO = "add_todo";
const ADD_FILTER = "add_filter";
const SET_TODO_STATUS = "set_todo_status";

const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

const addFilter = (payload) => {
    return {
        type: ADD_FILTER,
        payload
    }
}

const setTodoStatus = (payload) => {
    return {
        type: SET_TODO_STATUS,
        payload
    }
}

export {
    //Constants
    ADD_TODO,
    ADD_FILTER,
    SET_TODO_STATUS,

    //Actions
    addTodo,
    addFilter,
    setTodoStatus
}