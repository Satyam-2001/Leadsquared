"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsquaredApi = exports.ApiHost = void 0;
const axios_1 = __importDefault(require("axios"));
var ApiHost;
(function (ApiHost) {
    ApiHost["SINGAPORE"] = "https://api.leadsquared.com/v2/";
    ApiHost["UNITED_STATES"] = "https://api-us11.leadsquared.com/v2/";
    ApiHost["MUMBAI"] = "https://api-in21.leadsquared.com/v2/";
    ApiHost["HYDERABAD"] = "https://api-in22.leadsquared.com/v2/";
    ApiHost["IRELAND"] = "https://api-ir31.leadsquared.com/v2/";
    ApiHost["CANADA"] = "https://api-ca12.leadsquared.com/v2/";
})(ApiHost || (exports.ApiHost = ApiHost = {}));
class LeadsquaredApi {
    constructor(config) {
        this.config = config;
    }
    create(uri) {
        const axiosClient = axios_1.default.create({
            baseURL: `${this.config.host}${uri}`,
            headers: { "Content-Type": "application/json" },
        });
        // Request interceptor
        axiosClient.interceptors.request.use((request) => {
            request.params = {
                ...request.params,
                accessKey: this.config.accessKey,
                secretKey: this.config.secretKey,
            };
            return request;
        });
        // Response interceptor with proper typing
        axiosClient.interceptors.response.use((response) => {
            return response.data; // Returns only the Message part
        }, (error) => {
            const errorData = error.response.data;
            if (this.config.logger) {
                console.error(errorData);
            }
            throw errorData;
        });
        return axiosClient;
    }
}
exports.LeadsquaredApi = LeadsquaredApi;
