import Button from ".";
import { ButtonProps } from "./button.types";

export default {
  title: "Button",
  component: Button,
};

export const Contained = {
  args: {
    title: "Click Me",
    variant: "contained",
  },
} as { args: ButtonProps };

export const Outlined = {
  args: {
    title: "Click Me",
    variant: "outlined",
  },
} as { args: ButtonProps };

export const Small = {
  args: {
    title: "Click Me",
    size: "small",
  },
} as { args: ButtonProps };

export const Medium = {
  args: {
    title: "Click Me",
    size: "medium",
  },
} as { args: ButtonProps };

export const Large = {
  args: {
    title: "Click Me",
    size: "large",
  },
} as { args: ButtonProps };

export const Disabled = {
  args: {
    title: "Click Me",
    disabled: true,
  },
} as { args: ButtonProps };

export const IconLeft = {
  args: {
    title: "Click Me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path d="M8 14s-4-3.5-4-6a3.5 3.5 0 0 1 7 0c0 2.5-4 6-4 6z" />
      </svg>
    ),
    iconPosition: "left",
  },
} as { args: ButtonProps };

export const IconRight = {
  args: {
    title: "Click Me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path d="M8 14s-4-3.5-4-6a3.5 3.5 0 0 1 7 0c0 2.5-4 6-4 6z" />
      </svg>
    ),
    iconPosition: "right",
  },
} as { args: ButtonProps };

export const WithLoaders = {
  args: {
    title: "Click Me",
    loading: true,
  },
} as { args: ButtonProps };