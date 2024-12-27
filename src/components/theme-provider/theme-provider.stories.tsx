import ThemeProvider, { ThemeProvoderProps } from ".";

export default {
  title: "Theme Provider",
  component: ThemeProvider,
};

export const defaultTheme = {
  args: {
    primaryColor: "#000",
  },
} as { args: ThemeProvoderProps };
