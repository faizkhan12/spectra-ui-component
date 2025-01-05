import { InputProps } from "./input.types";
import classNames from "classnames";
import ThemeProvider from "../theme-provider";

const Input = ({
  className,
  name = "",
  label = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  error = "",
  required = false,
  size = "medium",
  rounded = "none",
}: InputProps) => {
  return (
    <ThemeProvider>
      <div className={classNames(className, "flex flex-col gap-1 w-max")}>
        <label htmlFor={label} className="text-sm">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          required={required}
          className={classNames("px-5 border-solid", {
            "cursor-not-allowed bg-gray-300": disabled,
            "border-primary": !disabled,
            "h-8": size === "small",
            "h-10": size === "medium",
            "h-12": size === "large",
            "rounded-none ": rounded === "none",
            "rounded-sm": rounded === "small",
            "rounded-md": rounded === "medium",
            "rounded-lg": rounded === "large",
            "rounded-full": rounded === "full",
            "border border-red-500 border-solid": error,
          })}
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>
    </ThemeProvider>
  );
};

export default Input;
