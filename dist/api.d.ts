import { LeadSquaredConfig } from ".";
export interface Response<T = any> {
    Status: "Success";
    Message: T;
}
export declare function createApiClient({ host, accessKey, secretKey, }: LeadSquaredConfig): import("axios").AxiosInstance;
