"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("../../common/api-client");
class ActivityManagement extends api_client_1.ApiClient {
    constructor(baseApi) {
        super(baseApi, "ProspectActivity.svc");
    }
    create(data) {
        return this.api.post("Create", data);
    }
}
exports.default = ActivityManagement;
