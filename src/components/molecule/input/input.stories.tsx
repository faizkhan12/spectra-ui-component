import Input from ".";
import { InputProps } from "./input.types";

export default {
  title: "molecule/Input",
  component: Input,
};

export const Default = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
  },
} as { args: InputProps };

export const Rounded_Full = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    rounded: "full",
  },
} as { args: InputProps };

export const Large = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    size: "large",
  },
} as { args: InputProps };

export const Disabled = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    disabled: true,
    value: "Faiz",
  },
} as { args: InputProps };

export const Error = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    error: "Name is required",
  },
} as { args: InputProps };
