export const todoListSelector = (state) => {
    let todoRemainings = [...state.todoList];
    const { searchTerm, status, priority } = state.filter;
    if (searchTerm) {
        todoRemainings = todoRemainings.filter(todo => {
            return todo.name.includes(searchTerm);
        })
    }


    if (status !== "All") {
        const condition = status === "Completed" ? true : false
        todoRemainings = todoRemainings.filter(todo => todo.completed === condition);
    }

    if (priority && priority.length > 0) {
        todoRemainings = todoRemainings.filter(todo => {
            return priority.includes(todo.priority);
        })
    }
    return todoRemainings;
}

