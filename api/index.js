import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://a5ca-175-192-208-49.ngrok.io",
  withCredentials: true,
});

export default axiosInstance;
