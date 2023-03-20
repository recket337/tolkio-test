export type FormDataT = Record<string, string>

export interface SetFormDataPayloadAction{
    id: string,
    data: FormDataT,
}