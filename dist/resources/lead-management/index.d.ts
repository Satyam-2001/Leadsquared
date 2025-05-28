import { AxiosInstance } from "axios";
import { BlukLeadData, CaptureLeadResponse, ConvertVisitorToLeadResponse, CreateBulkLeadResponse, CreateLeadResponse, LeadData, LeadDataWithFields, UpdateLeadResponse } from "./types";
export default class LeadManagement {
    private readonly api;
    constructor(parentApi: AxiosInstance);
    captureLead(data: LeadData): Promise<CaptureLeadResponse>;
    convertVisitorToLead(leadId: string, data: LeadData): Promise<ConvertVisitorToLeadResponse>;
    createLead(data: LeadDataWithFields): Promise<CreateLeadResponse>;
    createBulkLead(data: BlukLeadData): Promise<CreateBulkLeadResponse>;
    updateLead(data: LeadDataWithFields, postUpdatedLead?: boolean): Promise<UpdateLeadResponse>;
}
