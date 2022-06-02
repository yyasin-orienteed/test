import { SET_LOADING } from "../types";

const loading = (state = false, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return payload;

        default:
            return state;
    }
};

export default loading;