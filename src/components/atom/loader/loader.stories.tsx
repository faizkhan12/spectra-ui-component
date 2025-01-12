import Loader from ".";
import { LoaderProps } from "./loader.props";

export default {
  title: "atom/Loader",
  component: Loader,
};

export const Regular = {
  args: {
    size: "small",
    color: "grey",
  },
} as { args: LoaderProps };

export const Medium = {
  args: {
    size: "medium",
    color: "grey",
  },
} as { args: LoaderProps };

export const Large = {
  args: {
    size: "large",
    color: "grey",
  },
} as { args: LoaderProps };

export const WithText = {
  args: {
    size: "small",
    color: "grey",
    text: "Loading...",
  },
};
