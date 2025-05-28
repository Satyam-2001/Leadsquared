"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class LeadManagement {
    constructor(parentApi) {
        this.api = axios_1.default.create({
            ...parentApi.defaults,
            baseURL: `${parentApi.defaults.baseURL}/LeadManagement.svc/`,
        });
    }
    async captureLead(data) {
        const result = await this.api.post("Lead.Capture", data);
        return result.Message;
    }
    async convertVisitorToLead(leadId, data) {
        const result = await this.api.post("Lead.Convert", data, { params: { leadId } });
        return result.Message;
    }
    async createLead(data) {
        const result = await this.api.post("Lead.Create", data);
        return result.Message;
    }
    async createBulkLead(data) {
        return this.api.post("Lead/Bulk/Create", data);
    }
    async updateLead(data, postUpdatedLead) {
        const result = await this.api.post("Lead.CreateOrUpdate", data, {
            params: { postUpdatedLead },
        });
        return result.Message;
    }
}
exports.default = LeadManagement;
