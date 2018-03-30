import { createStore } from "redux";
import {reducers} from "../reducers";

export const makeStore = (initialState) => {
    return createStore(reducers, initialState);
};