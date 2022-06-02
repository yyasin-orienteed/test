import { SET_LOADING } from "../types";

export const changeLoading = (loading) => (dispatch) => dispatch({ type: SET_LOADING, payload: loading });
