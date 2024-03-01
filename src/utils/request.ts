import axios, { type AxiosRequestConfig, type AxiosInstance } from "axios";
import { useUsersStoreHook } from "@/stores/modules/users";

const BASE_URL = "http://1.116.150.155:8080/api";
const TIME_OUT = 100000;

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const service = (config?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
      token: localStorage.getItem("token") || "",
    },
    ...config,
  });

  //请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      const usersStore = useUsersStoreHook();
      const isToken = (config.headers || {}).isToken === false
      if (usersStore.token && !isToken) {
        config.headers['Authorization'] = usersStore.token // 让每个请求携带自定义token
      }

      return config;
    },
    function (err: any) {
      return Promise.reject(err);
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    function (response: any) {
      return response.data
    },
    function (err: any) {
      if (err.response) {
        return Promise.reject(err.response)
      }
    }
  );

  return instance;
};

export default service();
