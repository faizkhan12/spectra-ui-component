import { X } from "lucide-react";
import { ModalProps } from "./modal.types";
import classNames from "classnames";
import Button from "../button";

const Modal = ({
  showModal,
  onClose,
  title,
  children,
  footer,
  size = "lg",
}: ModalProps) => {
  if (!showModal) return;
  return (
    <div className="flex items-center justify-center absolute inset-0 bg-black bg-opacity-30">
      <div
        className={classNames(
          "flex flex-col gap-4 bg-white shadow-sm rounded p-3",
          {
            "w-1/2": size === "lg",
            "w-1/3": size === "md",
            "w-1/4": size === "sm",
          }
        )}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg">{title}</h2>
          <X onClick={onClose} className="cursor-pointer" />
        </div>
        <hr />

        <div className="text-sm">{children}</div>

        <div>
          {footer && (
            <div className="flex justify-end gap-3">
              <Button
                label="Cancel"
                onClick={onClose}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              />

              <Button
                label="OK"
                onClick={onClose}
                className="bg-red-500 text-white px-3 py-1 rounded"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
