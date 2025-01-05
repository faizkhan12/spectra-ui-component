export interface TabsProps {
  tabs: Array<{
    title: string;
    content: string;
  }>;
  activeTab: number;
  onTabChange: (index: number) => void;
  disabledTabs?: number[];
  orientation?: "horizontal" | "vertical";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}
