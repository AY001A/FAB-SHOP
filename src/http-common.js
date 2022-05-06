import axios from "axios";

const AUTH_ENDPOINT = "http://174.138.0.201";
const PRODUCT_SERVICE_ENDPOINT = "http://174.138.0.201:3000";

export const productService = axios.create({
  baseURL: AUTH_ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "x-fab-version": "1.0",
  },
});
export const authservice = axios.create({
  baseURL: PRODUCT_SERVICE_ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "x-fab-version": "1.0",
  },
});
