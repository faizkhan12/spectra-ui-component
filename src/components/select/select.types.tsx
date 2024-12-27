export interface SelectProps {
  value?: string | number;
  onChange: (value: string | number) => void;
  options: Array<{
    label: string;
    value: string | number;
    image?: string;
  }>;
  name?: string;
  placeholder?: string;
}
