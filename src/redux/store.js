import { createStore } from "redux";
import rootReducer, { initState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools();
console.log(composeEnhancers);

const store = createStore(rootReducer, composeEnhancers);

export default store;