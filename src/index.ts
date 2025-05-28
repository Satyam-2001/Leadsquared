import LeadManagement from "./resources/lead-management";
import { Api } from "./api";

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
  logger?: boolean;
}

export class Leadsquared {
  private readonly api: Api;
  public readonly leadManagement: LeadManagement;

  constructor(config: LeadSquaredConfig) {
    this.api = new Api(config);
    this.leadManagement = new LeadManagement(this.api);
  }
}
