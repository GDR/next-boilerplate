import {applyMiddleware, createStore} from "redux";
import {reducers} from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const enhancers = {};

export default function configureStore(initialState) {
    return createStore(reducers, initialState, composeWithDevTools());
};