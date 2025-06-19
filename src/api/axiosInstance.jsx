// src/api/axiosInstance.js

import axios from "axios";
import BASE_URL from "../config/config.jsx";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // if you're using cookies/session auth
});

export default axiosInstance;
 