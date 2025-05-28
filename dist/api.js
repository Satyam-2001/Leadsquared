"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const axios_1 = __importDefault(require("axios"));
class Api {
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
exports.Api = Api;
