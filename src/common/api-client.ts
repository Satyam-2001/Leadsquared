import { LeadsquaredApi } from "../api";
import { AxiosInstance } from "axios";

export abstract class ApiClient {
  public readonly api: AxiosInstance;

  constructor(baseApi: LeadsquaredApi, endPoint: string) {
    this.api = baseApi.create(endPoint);
  }
}
