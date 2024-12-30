import React from "react";
import { SwitchProps } from "./switch.types";
import classNames from "classnames";
import ThemeProvider from "../theme-provider";

const Switch = ({
  label,
  checked,
  onChange,
  disabled = false,
  orientation = "horizontal",
}: SwitchProps) => {
  return (
    <ThemeProvider>
      <div
        className={classNames("flex gap-1", {
          "flex-row ": orientation === "horizontal",
          "flex-col": orientation === "vertical",
        })}
      >
        <span className="text-sm">{label}</span>
        <div
          className={classNames(
            "flex bg-gray-400 w-10 p-1 rounded-full cursor-pointer",
            {
              "bg-primary justify-end": checked,
              "opacity-50 pointer-events-none cursor-not-allowed": disabled,
            }
          )}
          onClick={() => !disabled && onChange(!checked)}
        >
          <div className="w-4 h-4 rounded-full bg-white transition-all"></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Switch;
