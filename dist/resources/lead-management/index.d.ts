import { BlukLeadData, CaptureLeadResponse, ConvertVisitorToLeadResponse, CreateBulkLeadResponse, CreateLeadFieldData, CreateLeadResponse, LeadData, LeadDataWithFields, UpdateBulkLeadResponse, UpdateLeadResponse } from "./types";
import { Api } from "@/api";
export default class LeadManagement {
    private readonly api;
    constructor(baseApi: Api);
    captureLead(data: LeadData): Promise<CaptureLeadResponse>;
    convertVisitorToLead(leadId: string, data: LeadData): Promise<ConvertVisitorToLeadResponse>;
    createLead(data: LeadDataWithFields): Promise<CreateLeadResponse>;
    createBulkLead(data: BlukLeadData): Promise<CreateBulkLeadResponse>;
    updateLead(data: LeadDataWithFields, postUpdatedLead?: boolean): Promise<UpdateLeadResponse>;
    updateBuldLead(data: BlukLeadData): Promise<UpdateBulkLeadResponse>;
    createLeadField(data: CreateLeadFieldData): Promise<CreateLeadResponse>;
}
//# sourceMappingURL=index.d.ts.map