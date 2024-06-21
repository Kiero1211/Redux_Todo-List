import { createStore } from "redux";
import rootReducer, { iniState } from "./reducer";

const store = createStore(rootReducer, iniState);

export default store;