import { useState } from "react";
import Tabs from ".";
import { TabsProps } from "./tabs.props";

export default {
  title: "block/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

const tabsData = [
  {
    title: "Tab 1",
    content: "Content 1",
  },
  {
    title: "Tab 2",
    content: "Content 2",
  },
  {
    title: "Tab 3",
    content: "Content 3",
  },
];

const Template = (args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return <Tabs {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const Default = {
  args: {
    tabs: tabsData,
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };

export const Disabled = {
  args: {
    tabs: tabsData,
    disabledTabs: [1],
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };

export const Vertical = {
  args: {
    tabs: tabsData,
    orientation: "vertical",
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };

export const WithIcon = {
  args: {
    tabs: tabsData,
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
  },
  render: Template,
} as { args: TabsProps; render: () => JSX.Element };
