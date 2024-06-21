const ADD_TODO = "add_todo";

const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export {
    //Constants
    ADD_TODO,

    //Actions
    addTodo
}