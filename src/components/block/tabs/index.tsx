import React from "react";
import { TabsProps } from "./tabs.props";
import classNames from "classnames";

const Tabs = ({
  tabs,
  activeTab,
  onTabChange,
  disabledTabs,
  orientation = "horizontal",
  icon,
  iconPosition = "left",
}: TabsProps) => {
  return (
    <div
      className={classNames("flex", {
        "flex-col gap-2": orientation === "horizontal",
        "flex-row justify-start gap-6": orientation === "vertical",
      })}
    >
      <div
        className={classNames(
          "flex gap-5 border-0 border-solid border-gray-300 ",
          {
            "flex-col border-r": orientation === "vertical",
            "flex-row border-b": orientation === "horizontal",
          }
        )}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames(` flex  items-center p-1 cursor-pointer`, {
              "border-primary border-solid border-0 ": activeTab === index,
              "opacity-50 cursor-not-allowed pointer-events-none":
                disabledTabs?.includes(index),
              "border-r": orientation === "vertical",
              "border-b": orientation === "horizontal",
            })}
            onClick={() => onTabChange(index)}
          >
            {icon && icon}
            <span
              className={classNames("font-[0.8rem]", {
                "text-primary transition-all": activeTab === index,
                "text-gray-700": activeTab !== index,
              })}
            >
              {tab.title}
            </span>
          </div>
        ))}
      </div>
      <div className={"text-sm"}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
