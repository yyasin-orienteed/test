import { GET_CART } from "../types";

const initialState = [];

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART:
      return payload;
    default:
      return state;
  }
};

export default cart;
