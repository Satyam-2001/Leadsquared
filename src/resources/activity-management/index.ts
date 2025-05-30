import { LeadsquaredApi, Response } from "../../api";
import { ApiClient } from "../../common/api-client";
import { EndPoint } from "../../constants/endpoints";
import { ActivityPayload } from "./types";

export default class ActivityManagement extends ApiClient {
  constructor(baseApi: LeadsquaredApi) {
    super(baseApi, EndPoint.ActivityManagement);
  }

  create(data: ActivityPayload): Promise<Response<{ Id: string }>> {
    return this.api.post("Create", data);
  }
}
