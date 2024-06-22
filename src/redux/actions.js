const ADD_TODO = "add_todo";
const ADD_FILTER = "add_filter";

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

export {
    //Constants
    ADD_TODO,
    ADD_FILTER,

    //Actions
    addTodo,
    addFilter
}