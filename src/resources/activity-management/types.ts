export type ActivityField = {
  SchemaName: string;
  Value: string;
};

export type ActivityPayload = {
  RelatedProspectId: string;
  ActivityEvent: number;
  ActivityNote: string;
  ProcessFilesAsync: boolean;
  ActivityDateTime: string;
  Fields: ActivityField[];
};
