import { ADD_TODO } from "./actions";

export const initState = {
    filter: {
        searchTerm: "",
        status: "all",
        priority: []
    },
    todoList: [
        { id: 1, name: "Learn yoga", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: true, priority: "High" },
        { id: 3, name: "Learn Javascript", completed: false, priority: "Low" }
    ]
};

const rootReducer = (state = initState, action) => {
    console.log(state, action);
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payload]
            }
        default:
            return state;
    }
}

export default rootReducer;