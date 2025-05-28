import { AxiosInstance } from "axios";
import LeadManagement from "./resources/lead-management";
import { createApiClient } from "./api";

export enum ApiHost {
  SINGAPORE = "https://api.leadsquared.com/v2/",
  UNITED_STATES = "https://api-us11.leadsquared.com/v2/",
  MUMBAI = "https://api-in21.leadsquared.com/v2/",
  HYDERABAD = "https://api-in22.leadsquared.com/v2/",
  IRELAND = "https://api-ir31.leadsquared.com/v2/",
  CANADA = "https://api-ca12.leadsquared.com/v2/",
}

export interface LeadSquaredConfig {
  host: ApiHost;
  accessKey: string;
  secretKey: string;
}

export default class Leadsquared {
  private readonly api: AxiosInstance;
  public readonly leadManagement: LeadManagement;

  constructor(config: LeadSquaredConfig) {
    this.api = createApiClient(config);
    this.leadManagement = new LeadManagement(this.api);
  }
}
