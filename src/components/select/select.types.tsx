export interface SelectProps {
  className?: string;
  value?: string | number;
  onChange: (value: string | number) => void;
  options: Array<{
    label: string;
    value: string | number;
    image?: string;
  }>;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}
