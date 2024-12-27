export interface ButtonProps {
  title: string;
  variant?: "outlined" | "contained";
  onClick?: () => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}
