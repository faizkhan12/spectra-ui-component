import { useState } from "react";
import { SelectProps } from "./select.types";
import { ChevronDown } from "lucide-react";
import ThemeProvider from "../theme-provider";

const Select = ({
  value,
  onChange,
  options,
  name,
  placeholder,
}: SelectProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <ThemeProvider>
      <div className="w-max">
        <div
          className="flex items-center gap-7 justify-between border border-solid rounded-sm p-2 border-primary cursor-pointer px-5"
          onClick={() => setShowOptions(!showOptions)}
        >
          {value || placeholder}
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
                className="flex items-center hover:bg-gray-400 p-1 rounded-lg transition-all"
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
