import axios from "axios";

const API_BASE_ENDPOINT =
  "http://fabmicroservice.eastus2.cloudapp.azure.com:3000";

export default axios.create({
  baseURL: API_BASE_ENDPOINT,
  headers: {
    "Content-type": "application/json",
    "x-fab-version": "1.0",
  },
});
