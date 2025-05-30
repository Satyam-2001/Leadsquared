import { BlukLeadData, CaptureLeadResponse, ConvertVisitorToLeadResponse, CreateBulkLeadResponse, CreateLeadFieldData, CreateLeadResponse, LeadData, LeadDataWithFields, Prospect, UpdateBulkLeadResponse, UpdateLeadResponse } from "./types";
import { LeadsquaredApi, Response } from "../../api";
import { ApiClient } from "../../common/api-client";
export default class LeadManagement extends ApiClient {
    constructor(baseApi: LeadsquaredApi);
    getByPhoneNumber(phoneNumber: string): Promise<Prospect[]>;
    capture(data: LeadData): Promise<CaptureLeadResponse>;
    convertVisitor(leadId: string, data: LeadData): Promise<ConvertVisitorToLeadResponse>;
    createLead(data: LeadDataWithFields): Promise<CreateLeadResponse>;
    createBulk(data: BlukLeadData): Promise<CreateBulkLeadResponse>;
    createOrUpdate(data: LeadDataWithFields, postUpdatedLead?: boolean): Promise<UpdateLeadResponse>;
    createOrUpdateBulk(data: BlukLeadData): Promise<UpdateBulkLeadResponse>;
    createLeadField(data: CreateLeadFieldData): Promise<CreateLeadResponse>;
    update(leadId: string, data: LeadData): Promise<Response<ConvertVisitorToLeadResponse>>;
    updateByPhoneNumber(phoneNumber: string, data: LeadData): Promise<Response<ConvertVisitorToLeadResponse>>;
}
