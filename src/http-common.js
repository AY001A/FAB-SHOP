import axios from "axios";
import { decodeToken } from "./utils/decodeToken";
import { useDispatch } from "react-redux";
import authService from "./api/auth";

const AUTH_ENDPOINT = "http://174.138.0.201";
const PRODUCT_SERVICE_ENDPOINT = "http://174.138.0.201:3000";

const productService = axios.create({
  baseURL: AUTH_ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "x-fab-version": "1.0",
  },
});

const authservice = axios.create({
  baseURL: PRODUCT_SERVICE_ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "x-fab-version": "1.0",
  },
});

// Interceptors
const Token = localStorage.getItem("session");

productService.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (Token) {
      const decoded = decodeToken(Token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("fabUser");
        localStorage.removeItem("session");
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
authservice.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (Token) {
      const decoded = decodeToken(Token);
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("fabUser");
        localStorage.removeItem("session");
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { productService, authservice };
