import { LeadsquaredApi } from "../api";
import { AxiosInstance } from "axios";
export declare abstract class ApiClient {
    readonly api: AxiosInstance;
    constructor(baseApi: LeadsquaredApi, endPoint: string);
}
