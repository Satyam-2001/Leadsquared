export type LeadField = { Attribute: string; Value: any };
export type LeadData = LeadField[];

export type LeadDataWithFields = (LeadField & {
  Fields?: LeadData;
})[];

export type BlukLeadData = LeadDataWithFields[];

export interface CaptureLeadResponse {
  Id: string;
  RelatedId: string;
  IsCreated: boolean;
}

export interface ConvertVisitorToLeadResponse {
  AffectedRows: number;
}

export interface CreateLeadResponse {
  Id: string;
}

export interface UpdateLeadResponse
  extends CreateLeadResponse,
    ConvertVisitorToLeadResponse {}

export type CreateBulkLeadResponse = {
  RowNumber: number;
  LeadId: string;
  LeadCreated: boolean;
}[];
