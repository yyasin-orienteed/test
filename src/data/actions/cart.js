import { GET_CART } from "../types";
import Notiflix from 'notiflix';
export const getCart = () => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  dispatch({ type: GET_CART, payload: cart || [] });
};

export const addToCart = (cart, item) => (dispatch) => {
  const newCart = JSON.parse(JSON.stringify(cart));
  newCart.push(item);
  localStorage.setItem("cart", JSON.stringify(newCart));
  Notiflix.Notify.success('Added to cart successfully');
  dispatch(getCart());
};
