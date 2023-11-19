import axios, { AxiosRequestConfig } from "axios";

// TODO: axios config 관련 용도 정리해서 블로그 작성
const axiosConfig: AxiosRequestConfig = {
  // 백엔드 아직 준비 안되어서 로컬 호스트 링크 추가...msw 필요.
  baseURL: "http://localhost:3001",
  withCredentials: true,
  timeout: 1000 * 60,
};

export const defaultAxios = axios.create(axiosConfig);

defaultAxios.interceptors.response.use(function (response) {
  return response;
});
