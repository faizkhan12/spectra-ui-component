import classNames from "classnames";
import { ButtonProps } from "./button.types";
import ThemeProvider from "../../block/theme-provider";

const Button = ({
  className,
  label,
  variant = "contained",
  onClick,
  disabled,
  size = "medium",
  rounded = "none",
  icon,
  iconPosition = "left",
  loading = false,
}: ButtonProps) => {
  return (
    <ThemeProvider>
      <button
        className={classNames(className, "px-5 cursor-pointer shadow-none", {
          "border border-solid border-primary": variant === "outlined",
          "bg-primary text-white":
            variant === "contained" && !disabled && !loading,
          "pointer-events-none bg-gray-300 border-none cursor-not-allowed":
            disabled || loading,
          "h-8": size === "small",
          "h-10": size === "medium",
          "h-12": size === "large",
          "rounded-none": rounded === "none",
          "rounded-sm": rounded === "small",
          "rounded-md": rounded === "medium",
          "rounded-lg": rounded === "large",
          "rounded-full": rounded === "full",
          "flex gap-3 items-center": icon || loading,
          "flex-row-reverse": icon && iconPosition === "right",
        })}
        onClick={onClick}
      >
        {loading && (
          <div
            className={classNames(
              "w-3 h-3 border-2 rounded-full border-solid border-gray-500 border-t-transparent animate-spin",
              {
                "border-white": variant === "contained",
                "border-primary": variant === "outlined",
              }
            )}
          ></div>
        )}
        {icon && icon}
        {label}
      </button>
    </ThemeProvider>
  );
};

export default Button;
