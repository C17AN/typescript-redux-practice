import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import repositoriesReducer from "./reducers";

export const store = createStore(repositoriesReducer, {}, applyMiddleware(thunk));
