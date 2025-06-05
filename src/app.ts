import LeadManagement from "./resources/lead-management";
import ActivityManagement from "./resources/activity-management";
import { LeadsquaredApi, LeadSquaredConfig } from "./api";

export class Leadsquared {
  public readonly api: LeadsquaredApi;
  public readonly lead: LeadManagement;
  public readonly activity: ActivityManagement;

  constructor(config: LeadSquaredConfig) {
    this.api = new LeadsquaredApi(config);
    this.lead = new LeadManagement(this.api);
    this.activity = new ActivityManagement(this.api);
  }
}
