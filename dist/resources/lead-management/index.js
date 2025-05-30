"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("../../common/api-client");
class LeadManagement extends api_client_1.ApiClient {
    constructor(baseApi) {
        super(baseApi, "LeadManagement.svc");
    }
    async getByPhoneNumber(phoneNumber) {
        return this.api.post("RetrieveLeadByPhoneNumber", {
            params: { phone: phoneNumber },
        });
    }
    async capture(data) {
        const result = await this.api.post("Lead.Capture", data);
        return result.Message;
    }
    async convertVisitor(leadId, data) {
        const result = await this.api.post("Lead.Convert", data, { params: { leadId } });
        return result.Message;
    }
    async createLead(data) {
        const result = await this.api.post("Lead.Create", data);
        return result.Message;
    }
    async createBulk(data) {
        return this.api.post("Lead/Bulk/Create", data);
    }
    async createOrUpdate(data, postUpdatedLead) {
        const result = await this.api.post("Lead.CreateOrUpdate", data, {
            params: { postUpdatedLead },
        });
        return result.Message;
    }
    async createOrUpdateBulk(data) {
        return this.api.post("Lead/Bulk/CreateOrUpdate", data);
    }
    async createLeadField(data) {
        const result = await this.api.post("CreateLeadField", data);
        return result.Message;
    }
    async update(leadId, data) {
        return this.api.post("Lead.Update", data, { params: { leadId } });
    }
    async updateByPhoneNumber(phoneNumber, data) {
        const lead = await this.getByPhoneNumber(phoneNumber);
        if (!(lead === null || lead === void 0 ? void 0 : lead.length)) {
            throw new Error("Lead not found!");
        }
        const leadId = lead[0].ProspectID;
        return this.api.post("Lead.Update", data, { params: { leadId } });
    }
}
exports.default = LeadManagement;
