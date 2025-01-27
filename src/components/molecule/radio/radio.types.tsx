export interface RadioProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: Array<{
    label: string;
    value: string | number;
  }>;
  label?: string;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
}
