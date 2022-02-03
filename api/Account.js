import axiosInstance from "./index";

export function getKakaoLoginUrl() {
  return axiosInstance.get("/api/account/login-url");
}

export function getUserInfo(code) {
  console.log("api에서", code);
  return axiosInstance.get(`/api/account/login?code=${code}`);
}
