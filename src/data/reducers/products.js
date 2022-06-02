import { GET_PRODUCTS, GET_PRODUCT_BY_SKU } from "../types";

const initialState = {
  products: null,
  product: null,
};

const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCT_BY_SKU:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};

export default product;
