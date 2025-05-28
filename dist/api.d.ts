import { LeadSquaredConfig } from ".";
export interface Response<T = any> {
    Status: "Success";
    Message: T;
}
export declare class Api {
    private readonly config;
    constructor(config: LeadSquaredConfig);
    create(uri: string): import("axios").AxiosInstance;
}
//# sourceMappingURL=api.d.ts.map