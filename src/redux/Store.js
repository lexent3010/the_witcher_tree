import {combineReducers, createStore} from "redux";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    app: AppReducer
});

let store = createStore(reducers);


export default store;