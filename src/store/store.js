import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./reducers.js/filmsReducer";


export const store = createStore(filmsReducer, applyMiddleware(thunk));