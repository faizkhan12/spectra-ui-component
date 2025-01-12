import { useState } from "react";
import Radio from ".";
import { RadioProps } from "./radio.types";

export default {
  title: "molecule/Radio",
  component: Radio,
};

const Template = (args: RadioProps) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Radio {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

const options = [
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
];

export const Default = {
  args: {
    label: "Select Country",
    options: options,
  },
  render: Template,
} as { args: RadioProps };

export const Vertical = {
  args: {
    label: "Select Country",
    options: options,
    orientation: "vertical",
  },
  render: Template,
} as { args: RadioProps };
