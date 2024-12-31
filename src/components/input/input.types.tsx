export interface InputProps {
  className?: string;
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value: string;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
}
