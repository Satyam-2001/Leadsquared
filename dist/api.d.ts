export interface Response<T = any> {
    Status: "Success";
    Message: T;
}
export declare enum ApiHost {
    SINGAPORE = "https://api.leadsquared.com/v2/",
    UNITED_STATES = "https://api-us11.leadsquared.com/v2/",
    MUMBAI = "https://api-in21.leadsquared.com/v2/",
    HYDERABAD = "https://api-in22.leadsquared.com/v2/",
    IRELAND = "https://api-ir31.leadsquared.com/v2/",
    CANADA = "https://api-ca12.leadsquared.com/v2/"
}
export interface LeadSquaredConfig {
    host: ApiHost;
    accessKey: string;
    secretKey: string;
    logger?: boolean;
}
export declare class LeadsquaredApi {
    private readonly config;
    constructor(config: LeadSquaredConfig);
    create(uri: string): import("axios").AxiosInstance;
}
