import { useState } from "react";
import classNames from "classnames";
import { AlertProps } from "./alert.props";
import { Check, CircleAlert, CircleX, Info, X } from "lucide-react";

const Alert = ({
  className,
  message,
  description,
  type = "info",
  closable = false,
  showIcon = false,
}: AlertProps) => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div
      className={classNames(className, "p-5 border border-solid rounded", {
        "bg-blue-500 bg-opacity-20 border-blue-500 ": type === "info",
        "bg-green-500 bg-opacity-20 border-green-500 ": type === "success",
        "bg-red-500 bg-opacity-20 border-red-500 ": type === "error",
        "bg-yellow-500 bg-opacity-20 border-yellow-500 ": type === "warning",
      })}
    >
      <div className="flex justify-between">
        <span className="text-sm flex gap-2">
          {showIcon && (
            <span>
              {type === "info" && <Info size={20} className="text-blue-500" />}
              {type === "success" && (
                <Check size={20} className="text-green-500" />
              )}
              {type === "error" && (
                <CircleX size={20} className="text-red-500" />
              )}
              {type === "warning" && (
                <CircleAlert size={20} className="text-yellow-500" />
              )}
            </span>
          )}
          {message}
        </span>
        {closable && (
          <X
            size={20}
            onClick={() => setVisible(false)}
            className="text-gray-500 cursor-pointer"
          />
        )}
      </div>
      {description && <p className="text-xs mt-1">{description}</p>}
    </div>
  );
};

export default Alert;
