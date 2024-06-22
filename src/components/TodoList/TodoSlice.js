import { ADD_TODO, SET_TODO_STATUS } from "../../redux/actions";

const initState = [
    { id: 1, name: "Learn yoga", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: false, priority: "High" },
    { id: 3, name: "Learn Javascript", completed: false, priority: "Low" }
];

const todoReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_TODO:
            return [...state, payload]

        case SET_TODO_STATUS:
            const { name, completed } = payload;

            return state.map(todo => {
                if (todo.name === name) {
                    return { ...todo, completed };
                }
                return todo;
            })
        default:
            return state;
    }
}

export default todoReducer;