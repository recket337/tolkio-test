import { InputTypes } from "./components/FormMaker/types";

export const exampleConfig = [
  {
    id: "first_name",
    type: "inputText" as keyof typeof InputTypes,
    label: "First Name",
    defaultValue: "Some first name",
  },
  {
    id: "last_name",
    type: "inputText" as keyof typeof InputTypes,
    label: "Last Name",
  },
  {
    id: "email",
    type: "inputEmail" as keyof typeof InputTypes,
    label: "Email",
    required: true,
  },
  {
    id: "password",
    type: "inputPassword" as keyof typeof InputTypes,
    label: "Password",
    required: true,
  },
];
