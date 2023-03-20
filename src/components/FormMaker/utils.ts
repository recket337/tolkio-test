import { FieldParams } from "./types";

export const getInitialState = (config: FieldParams[]) => config.reduce((acc: Record<string, string>, item) => {
    acc[item.id] = item.defaultValue ?? '';
    return acc;
}, {})