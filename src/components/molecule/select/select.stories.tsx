import { useState } from "react";
import Select from ".";
import { SelectProps } from "./select.types";

export default {
  title: "molecule/Select",
  component: Select,
};

const Template = (args: SelectProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Select {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

export const Default = {
  args: {
    placeholder: "Select a country",
    options: [
      {
        label: "India",
        value: "india",
      },
      {
        label: "United States",
        value: "us",
      },
      {
        label: "United Kingdom",
        value: "uk",
      },
      {
        label: "Australia",
        value: "aus",
      },
      {
        label: "Canada",
        value: "can",
      },
    ],
    onChange: (value: string) => console.log(value),
  },
  render: Template,
} as { args: SelectProps };

export const WithFlags = {
  args: {
    placeholder: "Select a country",
    options: [
      {
        label: "India",
        value: "india",
        image: "https://cdn.countryflags.com/thumbs/india/flag-square-250.png",
      },
      {
        label: "United States",
        value: "us",
        image:
          "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-square-250.png",
      },
      {
        label: "United Kingdom",
        value: "uk",
        image:
          "https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png",
      },
      {
        label: "Australia",
        value: "aus",
        image:
          "https://cdn.countryflags.com/thumbs/australia/flag-square-250.png",
      },
      {
        label: "Canada",
        value: "can",
        image: "https://cdn.countryflags.com/thumbs/canada/flag-square-250.png",
      },
    ],
    onChange: (value: string) => console.log(value),
  },
  render: Template,
} as { args: SelectProps };
