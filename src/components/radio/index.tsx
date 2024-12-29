import classNames from "classnames";
import { RadioProps } from "./radio.types";

const Radio = ({
  value = "",
  onChange = () => {},
  options,
  label,
  disabled,
  orientation = "horizontal",
}: RadioProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm">{label}</span>
      <div
        className={classNames("flex gap-5 flex-wrap", {
          "flex-col": orientation === "vertical",
        })}
      >
        {options.map((option) => (
          <div
            className={classNames("flex items-center gap-1 cursor-pointer", {
              "pointer-events-none cursor-not-allowed": disabled,
            })}
            key={option.value}
            onClick={() => onChange(option.value)}
          >
            <div
              className={classNames(
                "w-4 h-4 border border-solid rounded-full box-border",
                {
                  "border-4 border-primary": option.value === value,
                  "border-gray-400 ": disabled,
                }
              )}
            ></div>
            <span
              className={classNames("text-sm", {
                "text-gray-400": disabled,
              })}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
