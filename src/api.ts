import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { LeadSquaredConfig } from ".";

export interface Response<T = any> {
  Status: "Success";
  Message: T;
}

export class Api {
  constructor(private readonly config: LeadSquaredConfig) {}
  create(uri: string) {
    const axiosClient = axios.create({
      baseURL: `${this.config.host}${uri}`,
      headers: { "Content-Type": "application/json" },
    });

    // Request interceptor
    axiosClient.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        request.params = {
          ...request.params,
          accessKey: this.config.accessKey,
          secretKey: this.config.secretKey,
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
        const errorData = error.response.data;
        if (this.config.logger) {
          console.error(errorData);
        }
        throw errorData;
      }
    );

    return axiosClient;
  }
}
