"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("../../common/api-client");
const endpoints_1 = require("../../constants/endpoints");
class ActivityManagement extends api_client_1.ApiClient {
    constructor(baseApi) {
        super(baseApi, endpoints_1.EndPoint.ActivityManagement);
    }
    create(data) {
        return this.api.post("Create", data);
    }
}
exports.default = ActivityManagement;
