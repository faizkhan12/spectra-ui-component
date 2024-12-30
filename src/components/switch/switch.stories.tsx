import { useState } from "react";
import Switch from ".";
import { SwitchProps } from "./switch.types";

export default {
  title: "Switch",
  component: Switch,
};

const Template = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(checked) => setChecked(checked)}
    />
  );
};

export const Default = {
  args: {
    label: "Basic",
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };