"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leadsquared = exports.ApiHost = void 0;
const lead_management_1 = __importDefault(require("./resources/lead-management"));
const api_1 = require("./api");
var ApiHost;
(function (ApiHost) {
    ApiHost["SINGAPORE"] = "https://api.leadsquared.com/v2/";
    ApiHost["UNITED_STATES"] = "https://api-us11.leadsquared.com/v2/";
    ApiHost["MUMBAI"] = "https://api-in21.leadsquared.com/v2/";
    ApiHost["HYDERABAD"] = "https://api-in22.leadsquared.com/v2/";
    ApiHost["IRELAND"] = "https://api-ir31.leadsquared.com/v2/";
    ApiHost["CANADA"] = "https://api-ca12.leadsquared.com/v2/";
})(ApiHost || (exports.ApiHost = ApiHost = {}));
class Leadsquared {
    constructor(config) {
        this.api = new api_1.Api(config);
        this.leadManagement = new lead_management_1.default(this.api);
    }
}
exports.Leadsquared = Leadsquared;
