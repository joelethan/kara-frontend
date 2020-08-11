import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
let headers = {};

console.log("baseURL", baseURL);
if (localStorage.token) {
  headers.Authorization = "Bearer " + localStorage.token;
}

const axiosInstance = axios.create({
  baseURL,
  headers,
});

export default axiosInstance;
