import LeadManagement from "./resources/lead-management";
import ActivityManagement from "./resources/activity-management";
import { LeadsquaredApi, LeadSquaredConfig } from "./api";
export default class Leadsquared {
    readonly api: LeadsquaredApi;
    readonly lead: LeadManagement;
    readonly activity: ActivityManagement;
    constructor(config: LeadSquaredConfig);
}
