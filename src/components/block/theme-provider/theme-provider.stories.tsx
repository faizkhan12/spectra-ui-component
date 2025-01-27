import ThemeProvider, { ThemeProvoderProps } from ".";

export default {
  title: "block/Theme Provider",
  component: ThemeProvider,
  tags: ["autodocs"],
};

export const defaultTheme = {
  args: {
    primaryColor: "#000",
  },
} as { args: ThemeProvoderProps };
