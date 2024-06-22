import { createStore } from "redux";
import rootReducer, { initState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, initState, composeEnhancers);

export default store;