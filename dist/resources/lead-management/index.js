"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LeadManagement {
    constructor(baseApi) {
        this.api = baseApi.create("LeadManagement.svc");
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
