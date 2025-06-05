"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leadsquared = void 0;
const lead_management_1 = __importDefault(require("./resources/lead-management"));
const activity_management_1 = __importDefault(require("./resources/activity-management"));
const api_1 = require("./api");
class Leadsquared {
    constructor(config) {
        this.api = new api_1.LeadsquaredApi(config);
        this.lead = new lead_management_1.default(this.api);
        this.activity = new activity_management_1.default(this.api);
    }
}
exports.Leadsquared = Leadsquared;
