import classNames from "classnames";
import { LoaderProps } from "./loader.props";

const Loader = ({ className, size, color, text }: LoaderProps) => {
  return (
    <div className={classNames(className, "w-max")}>
      <div
        className={classNames(
          " border border-solid border-t-transparent rounded-full animate-spin",
          {
            "h-10 w-10 border-2": size === "small",
            "h-20 w-20 border-4": size === "medium",
            "h-32 w-32 border-8": size === "large",
          }
        )}
        style={{
          color: color,
        }}
      ></div>
      {text && <span className="text-sm">{text}</span>}
    </div>
  );
};

export default Loader;
