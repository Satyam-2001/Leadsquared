import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export interface Response<T = any> {
  Status: "Success";
  Message: T;
}

export enum ApiHost {
  SINGAPORE = "https://api.leadsquared.com/v2/",
  UNITED_STATES = "https://api-us11.leadsquared.com/v2/",
  MUMBAI = "https://api-in21.leadsquared.com/v2/",
  HYDERABAD = "https://api-in22.leadsquared.com/v2/",
  IRELAND = "https://api-ir31.leadsquared.com/v2/",
  CANADA = "https://api-ca12.leadsquared.com/v2/",
}

export interface LeadSquaredConfig {
  host: ApiHost;
  accessKey: string;
  secretKey: string;
  logger?: boolean;
}

export class LeadsquaredApi {
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
