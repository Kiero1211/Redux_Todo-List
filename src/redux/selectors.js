import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchTermSelector = (state) => state.filter.searchTerm;
export const statusSelector = (state) => state.filter.status;
export const prioritySelector = (state) => state.filter.priority;


export const filteredTodosSelector = createSelector(
    todoListSelector,
    searchTermSelector,
    statusSelector,
    prioritySelector,
    (todoList, searchTerm, status, priority) => {
        let todoRemainings = [...todoList];
        if (searchTerm) {
            todoRemainings = todoRemainings.filter(todo => {
                return todo.name.includes(searchTerm);
            })
        }

        if (status !== "All") {
            const condition = status === "Completed";
            todoRemainings = todoRemainings.filter(todo => todo.completed === condition);
        }

        if (priority && priority.length > 0) {
            todoRemainings = todoRemainings.filter(todo => {
                return priority.includes(todo.priority);
            })
        }
        return todoRemainings;
    }
)
