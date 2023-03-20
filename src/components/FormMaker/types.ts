export interface FormMakerPropsType {
    config: FieldParams[],
    id: string,
}

export enum InputTypes {
    inputEmail = 'email',
    inputText = 'text',
    inputPassword = 'password',
}

export interface FieldParams {
    defaultValue?: string,
    required?: boolean,
    id: string,
    type: keyof typeof InputTypes,
    label: string,
}