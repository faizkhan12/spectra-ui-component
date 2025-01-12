export interface ModalProps {
  showModal: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: boolean;
  size?: "sm" | "md" | "lg";
}
