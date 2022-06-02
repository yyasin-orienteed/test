import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import RootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middlewares = [promise, thunk];

const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;