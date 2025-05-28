import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { LeadSquaredConfig } from ".";

export interface Response<T = any> {
  Status: "Success";
  Message: T;
}

export function createApiClient({
  host,
  accessKey,
  secretKey,
}: LeadSquaredConfig) {
  const axiosClient = axios.create({
    baseURL: host,
    headers: { "Content-Type": "application/json" },
  });

  // Request interceptor
  axiosClient.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      request.params = {
        ...request.params,
        accessKey,
        secretKey,
      };
      return request;
    }
  );

  // Response interceptor with proper typing
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data; // Returns only the Message part
    },
    (error) => {
      // Handle errors here if needed
      return Promise.reject(error);
    }
  );

  return axiosClient;
}
