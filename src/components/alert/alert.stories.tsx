import Alert from ".";
import { AlertProps } from "./alert.props";

export default {
  component: Alert,
  title: "Alert",
};

export const Info = {
  args: {
    message: "This is an info Alert",
    description: "This is a description",
    type: "info",
  },
} as { args: AlertProps };

export const Success = {
  args: {
    message: "This is a success Alert",
    description: "This is a description",
    type: "success",
  },
} as { args: AlertProps };

export const Error = {
  args: {
    message: "This is an error Alert",
    description: "This is a description",
    type: "error",
  },
} as { args: AlertProps };

export const Warning = {
  args: {
    message: "This is a warning Alert",
    description: "This is a description",
    type: "warning",
  },
} as { args: AlertProps };

export const WithIcon = {
  args: {
    message: "This is an Alert with Icon",
    description: "This is a description",
    showIcon: true,
  },
} as { args: AlertProps };

export const WithCloseButton = {
  args: {
    message: "This is an Alert with Close Button",
    description: "This is a description",
    closable: true,
  },
} as { args: AlertProps };
