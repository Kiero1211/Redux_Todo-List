import { ADD_TODO, ADD_FILTER, SET_TODO_STATUS } from "./actions";

export const initState = {
    filter: {
        searchTerm: "",
        status: "All",
        priority: []
    },
    todoList: [
        { id: 1, name: "Learn yoga", completed: false, priority: "Medium" },
        { id: 2, name: "Learn Redux", completed: true, priority: "High" },
        { id: 3, name: "Learn Javascript", completed: false, priority: "Low" }
    ]
};

const rootReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payload]
            }
        case ADD_FILTER:
            const { searchTerm, status, priority } = payload;
            const newSeachTerm = searchTerm ?? state.filter.searchTerm;
            const newStatus = status || state.filter.status;
            const newPriority = priority || state.filter.priority;
            return {
                ...state,
                filter: {
                    searchTerm: newSeachTerm,
                    status: newStatus,
                    priority: newPriority
                }
            }
        case SET_TODO_STATUS:
            const { name, completed } = payload;

            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.name === name) {
                        return { ...todo, completed };
                    }
                    return todo;
                })
            };
        default:
            return state;
    }
}

export default rootReducer;