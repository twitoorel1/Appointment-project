import axios, { AxiosInstance, AxiosResponse } from "axios";
import { getCookie } from "./cookies";

// create an axios instance with default config
const api = axios.create({
  baseURL: process.env.REST_API_URL_ENDPOINT,
  timeout: 5000, // 5 seconds timeout
  // headers: {
  //     "Content-Type": "application/json",
  //     authKeyCookieName: getCookie(authKeyCookieName),
  // },
  headers: { "Content-Type": "application/json" },
});

// define a helper function to handle response data
function handleResponse(response) {
  return response.data;
}

// define a helper function to handle error message
function handleError(error) {
  return console.error(error.message);
}

export { api, handleResponse, handleError };
