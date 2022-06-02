import { combineReducers } from "redux";

import Products from "./products";
import loading from "./loading";
import cart from "./cart";

const reducers = {
  Products,
  loading,
  cart,
};

export default combineReducers(reducers);
