import axios, { AxiosInstance } from "axios";
import {
  BlukLeadData,
  CaptureLeadResponse,
  ConvertVisitorToLeadResponse,
  CreateBulkLeadResponse,
  CreateLeadResponse,
  LeadData,
  LeadDataWithFields,
  UpdateLeadResponse,
} from "./types";
import { Response } from "@/api";

export default class LeadManagement {
  private readonly api: AxiosInstance;

  constructor(parentApi: AxiosInstance) {
    this.api = axios.create({
      ...parentApi.defaults,
      baseURL: `${parentApi.defaults.baseURL}/LeadManagement.svc/`,
    });
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
}
