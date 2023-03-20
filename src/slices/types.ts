export type FormDataT = Record<string, string>

export interface setFormDataPayloadActionType{
    id: string,
    data: FormDataT,
}