import { useState } from "react";
import { ChevronDown } from "lucide-react";
import classNames from "classnames";
import { SelectProps } from "./select.types";
import ThemeProvider from "../../block/theme-provider";

const Select = ({
  className,
  value,
  onChange,
  options,
  name,
  placeholder,
  disabled,
  fullWidth,
  rounded = "none",
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState(false);
  let selectedOption = null;

  if (value) {
    selectedOption = options.find((option) => option.value === value);
  }

  let labelToShow = selectedOption ? (
    <div className="flex items-center gap-2">
      {selectedOption.image && (
        <img
          src={selectedOption.image}
          alt={selectedOption.label}
          className="w-4 h-3 mr-2"
        />
      )}
      {selectedOption.label}
    </div>
  ) : (
    placeholder
  );

  return (
    <ThemeProvider>
      <div
        className={classNames(className, "w-max", {
          "w-full": fullWidth,
        })}
      >
        <div
          className={classNames(
            `flex items-center gap-7 justify-between border border-solid p-2 border-primary cursor-pointer`,
            {
              "bg-gray-200 pointer-events-none cursor-not-allowed": disabled,
              "rounded-none": rounded === "none",
              "rounded-sm": rounded === "sm",
              "rounded-md": rounded === "md",
              "rounded-lg": rounded === "lg",
              "rounded-full": rounded === "full",
            }
          )}
          onClick={() => setShowOptions(!showOptions)}
        >
          {labelToShow}
          <span>
            <ChevronDown
              size={16}
              className={`text-primary ${
                showOptions && "rotate-180"
              } transition-all`}
            />
          </span>
        </div>
        {showOptions && (
          <div className="flex  flex-col gap-3 border border-solid rounded-sm p-2 cursor-pointer ">
            {options.map((option) => (
              <div
                key={option.value}
                className={classNames(
                  `flex items-center hover:bg-gray-300 p-1 rounded-lg transition-all ${
                    option.value === value && "bg-gray-300"
                  }`
                )}
                onClick={() => {
                  onChange(option.value);
                  setShowOptions(false);
                }}
              >
                {option.image && (
                  <img
                    src={option.image}
                    alt={option.label}
                    className="w-4 h-3 mr-2"
                  />
                )}
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Select;
