import { ADD_FILTER } from "../../redux/actions";

const initState = {
    searchTerm: "",
    status: "All",
    priority: []
};

const filtersReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_FILTER:
            const { searchTerm, status, priority } = payload;
            const newSeachTerm = searchTerm ?? state.searchTerm;
            const newStatus = status || state.status;
            const newPriority = priority || state.priority;
            return {
                searchTerm: newSeachTerm,
                status: newStatus,
                priority: newPriority
            }
        default:
            return state;
    }
}

export default filtersReducer;