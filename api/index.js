import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://5f96-211-108-242-98.ngrok.io",
  withCredentials: true,
});

export default axiosInstance;
