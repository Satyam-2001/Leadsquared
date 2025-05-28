"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiClient = createApiClient;
const axios_1 = __importDefault(require("axios"));
function createApiClient({ host, accessKey, secretKey, }) {
    const axiosClient = axios_1.default.create({
        baseURL: host,
        headers: { "Content-Type": "application/json" },
    });
    // Request interceptor
    axiosClient.interceptors.request.use((request) => {
        request.params = {
            ...request.params,
            accessKey,
            secretKey,
        };
        return request;
    });
    // Response interceptor with proper typing
    axiosClient.interceptors.response.use((response) => {
        return response.data; // Returns only the Message part
    }, (error) => {
        // Handle errors here if needed
        return Promise.reject(error);
    });
    return axiosClient;
}
