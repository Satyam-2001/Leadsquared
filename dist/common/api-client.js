"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiClient = void 0;
class ApiClient {
    constructor(baseApi, endPoint) {
        this.api = baseApi.create(endPoint);
    }
}
exports.ApiClient = ApiClient;
