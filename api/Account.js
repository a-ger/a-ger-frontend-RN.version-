import axiosInstance from "./index";

export function getKakaoLoginUrl() {
  return axiosInstance.get("/api/account/login-url");
}
