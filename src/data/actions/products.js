import API from "../../utils/api";
import { GET_PRODUCTS, GET_PRODUCT_BY_SKU } from "../types";
import { changeLoading } from "./loading";

export const getProducts = () => async (dispatch) => {
  dispatch(changeLoading(true));
  API.getRequest(false, "/products.json")
    .then((res) => {
      dispatch(changeLoading(false));
      dispatch({ type: GET_PRODUCTS, payload: res });
    })
    .catch((err) => {
      dispatch(changeLoading(false));
      console.log(err, "err");
    });
};

export const getProductBySku = (skuProduct) => async (dispatch) => {
  dispatch(changeLoading(true));
  API.getRequest(false, "/products.json")
    .then((res) => {
      dispatch(changeLoading(false));
      dispatch({ type: GET_PRODUCT_BY_SKU, payload: res.find(({ sku }) => sku === skuProduct) });
    })
    .catch((err) => {
      dispatch(changeLoading(false));
      console.log(err, "err");
    });
};
