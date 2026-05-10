import axios from "axios";

const API = axios.create({
  baseURL:
   'http://localhost:3001/api/',
    // 'https://foland-realty-server.onrender.com/api/foland-realty',
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
