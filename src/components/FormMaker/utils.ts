import { FormDataT } from "../../slices/types";
import { FieldParams } from "./types";

export const getInitialState = (config: FieldParams[]): FormDataT => config.reduce((acc: FormDataT, item) => {
    acc[item.id] = item.defaultValue ?? '';
    return acc;
}, {})