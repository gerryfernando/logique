import axios from "axios";

const API = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  // Replace with your API base URL
});

// Request interceptor
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
