import axios from "axios";

// const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
//  baseURL: API_URL,
  baseURL: "https://vexa-server.onrender.com/api/",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) config.headers.Authorization = token;
    return config;
  },
  (err) => Promise.reject(err)
);


// error if response doesnt have token
API.interceptors.response.use(
  (response) => response,
  // (err) => {
  //   if (err.response && err.response.status === 401) {
  //     window.location.href = "/login";
  //   }
  //   return Promise.reject(err); 
  // }
);

export default API;
