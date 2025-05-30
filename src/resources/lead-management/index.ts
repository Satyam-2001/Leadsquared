import {
  BlukLeadData,
  CaptureLeadResponse,
  ConvertVisitorToLeadResponse,
  CreateBulkLeadResponse,
  CreateLeadFieldData,
  CreateLeadResponse,
  LeadData,
  LeadDataWithFields,
  Prospect,
  UpdateBulkLeadResponse,
  UpdateLeadResponse,
} from "./types";
import { LeadsquaredApi, Response } from "../../api";
import { ApiClient } from "../../common/api-client";

export default class LeadManagement extends ApiClient {
  constructor(baseApi: LeadsquaredApi) {
    super(baseApi, "LeadManagement.svc");
  }

  async getByPhoneNumber(phoneNumber: string): Promise<Prospect[]> {
    return this.api.post("RetrieveLeadByPhoneNumber", {
      params: { phone: phoneNumber },
    });
  }

  async capture(data: LeadData): Promise<CaptureLeadResponse> {
    const result: Response<CaptureLeadResponse> = await this.api.post(
      "Lead.Capture",
      data
    );
    return result.Message;
  }

  async convertVisitor(
    leadId: string,
    data: LeadData
  ): Promise<ConvertVisitorToLeadResponse> {
    const result: Response<ConvertVisitorToLeadResponse> = await this.api.post(
      "Lead.Convert",
      data,
      { params: { leadId } }
    );

    return result.Message;
  }

  async createLead(data: LeadDataWithFields): Promise<CreateLeadResponse> {
    const result: Response<CreateLeadResponse> = await this.api.post(
      "Lead.Create",
      data
    );
    return result.Message;
  }

  async createBulk(data: BlukLeadData): Promise<CreateBulkLeadResponse> {
    return this.api.post("Lead/Bulk/Create", data);
  }

  async createOrUpdate(
    data: LeadDataWithFields,
    postUpdatedLead?: boolean
  ): Promise<UpdateLeadResponse> {
    const result: Response<UpdateLeadResponse> = await this.api.post(
      "Lead.CreateOrUpdate",
      data,
      {
        params: { postUpdatedLead },
      }
    );
    return result.Message;
  }

  async createOrUpdateBulk(
    data: BlukLeadData
  ): Promise<UpdateBulkLeadResponse> {
    return this.api.post("Lead/Bulk/CreateOrUpdate", data);
  }

  async createLeadField(
    data: CreateLeadFieldData
  ): Promise<CreateLeadResponse> {
    const result: Response<CreateLeadResponse> = await this.api.post(
      "CreateLeadField",
      data
    );
    return result.Message;
  }

  async update(
    leadId: string,
    data: LeadData
  ): Promise<Response<ConvertVisitorToLeadResponse>> {
    return this.api.post("Lead.Update", data, { params: { leadId } });
  }

  async updateByPhoneNumber(
    phoneNumber: string,
    data: LeadData
  ): Promise<Response<ConvertVisitorToLeadResponse>> {
    const lead = await this.getByPhoneNumber(phoneNumber);
    if (!lead?.length) {
      throw new Error("Lead not found!");
    }
    const leadId = lead[0].ProspectID;
    return this.api.post("Lead.Update", data, { params: { leadId } });
  }
}
