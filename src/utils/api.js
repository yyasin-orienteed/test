import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getErrorMessage = () => {
  return "You have to sign in before continue.";
};

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      let message = getErrorMessage(window.location.pathname);
      if (!window.location.pathname.includes("login")) {
        // auth error
        window.location.href = `/login/?next=${encodeURIComponent(window.location.pathname)}${
          message ? `&message=${message}` : ""
        }`;
      }
    }
    if (error.response && error.response.status === 500) {
      // internal server error
      window.location.pathname = "/500";
    } else if (!error.response) {
      // Network Error.
      return Promise.reject({ message: "Network Error" });
    }
    return Promise.reject(error.response);
  }
);

const getRequest = (authenticate, url, params = {}) => {
  // const encoded = encodeURI(url);
  let headers = { "x-requested-with": "XMLHttpRequest" };
  if (authenticate && window.localStorage.getItem("token")) {
    const token = window.localStorage.getItem("token");
    headers.authorization = `Bearer ${token}`;
  }
  return instance
    .get(encodeURI(`${url}`), { params, headers })
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export default {
  getRequest,
};
