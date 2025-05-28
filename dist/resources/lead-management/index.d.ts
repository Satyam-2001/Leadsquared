import { BlukLeadData, CaptureLeadResponse, ConvertVisitorToLeadResponse, CreateBulkLeadResponse, CreateLeadResponse, LeadData, LeadDataWithFields, UpdateLeadResponse } from "./types";
import { Api } from "@/api";
export default class LeadManagement {
    private readonly api;
    constructor(baseApi: Api);
    captureLead(data: LeadData): Promise<CaptureLeadResponse>;
    convertVisitorToLead(leadId: string, data: LeadData): Promise<ConvertVisitorToLeadResponse>;
    createLead(data: LeadDataWithFields): Promise<CreateLeadResponse>;
    createBulkLead(data: BlukLeadData): Promise<CreateBulkLeadResponse>;
    updateLead(data: LeadDataWithFields, postUpdatedLead?: boolean): Promise<UpdateLeadResponse>;
}
//# sourceMappingURL=index.d.ts.map