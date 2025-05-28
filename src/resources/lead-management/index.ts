import { AxiosInstance } from "axios";
import {
  BlukLeadData,
  CaptureLeadResponse,
  ConvertVisitorToLeadResponse,
  CreateBulkLeadResponse,
  CreateLeadFieldData,
  CreateLeadResponse,
  LeadData,
  LeadDataWithFields,
  UpdateBulkLeadResponse,
  UpdateLeadResponse,
} from "./types";
import { Api, Response } from "@/api";

export default class LeadManagement {
  private readonly api: AxiosInstance;

  constructor(baseApi: Api) {
    this.api = baseApi.create("LeadManagement.svc");
  }

  async captureLead(data: LeadData): Promise<CaptureLeadResponse> {
    const result: Response<CaptureLeadResponse> = await this.api.post(
      "Lead.Capture",
      data
    );
    return result.Message;
  }

  async convertVisitorToLead(
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

  async createBulkLead(data: BlukLeadData): Promise<CreateBulkLeadResponse> {
    return this.api.post("Lead/Bulk/Create", data);
  }

  async updateLead(
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

  async updateBuldLead(data: BlukLeadData): Promise<UpdateBulkLeadResponse> {
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
}
