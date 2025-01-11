export interface AlertProps {
  className?: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  description?: string;
  closable?: boolean;
  showIcon?: boolean;
}
