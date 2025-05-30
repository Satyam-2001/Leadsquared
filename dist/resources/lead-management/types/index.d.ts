export type * from "./prospect";
type FieldComponent = "Textbox" | "TextArea" | "Email" | "Phone" | "URL" | "Date" | "DateTime" | "Time" | "RadioButton" | "CheckBox" | "Dropdown" | "SearchableDropdown" | "DropdownWithOthers";
type FieldType = "Text" | "Number" | "Phone" | "Email" | "Website" | "Date" | "Time" | "Boolean" | "Select";
export type LeadField = {
    Attribute: string;
    Value: any;
};
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
export interface UpdateLeadResponse extends CreateLeadResponse, ConvertVisitorToLeadResponse {
}
export type CreateBulkLeadResponse = {
    RowNumber: number;
    LeadId: string;
    LeadCreated: boolean;
}[];
export type UpdateBulkLeadResponse = {
    RowNumber: number;
    LeadId: string;
    LeadCreated: boolean;
    LeadUpdated: boolean;
    AffectedRows: number;
}[];
export type CreateLeadFieldData = {
    DisplayName: string;
    DataType: FieldType;
    IsMandatory: boolean;
    RenderTypeTextValue: FieldComponent;
    ShowInImport: boolean;
    ShowInMailMerge: boolean;
    LockAfterCreate: number;
    UseInLeadClone: boolean;
    MaxLength: number;
    OptionsJson: {
        IsDefault: boolean;
        Value: string;
        Order: number;
    }[];
};
