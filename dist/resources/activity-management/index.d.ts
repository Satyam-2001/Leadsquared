import { LeadsquaredApi, Response } from "../../api";
import { ApiClient } from "../../common/api-client";
import { ActivityPayload } from "./types";
export default class ActivityManagement extends ApiClient {
    constructor(baseApi: LeadsquaredApi);
    create(data: ActivityPayload): Promise<Response<{
        Id: string;
    }>>;
}
