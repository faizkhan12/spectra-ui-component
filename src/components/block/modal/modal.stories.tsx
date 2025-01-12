import { useState } from "react";
import Modal from ".";
import { ModalProps } from "./modal.types";
import Button from "../../atom/button";

export default {
  title: "block/Modal",
  component: Modal,
};

const Template = (args: ModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        label="Open Modal"
        onClick={() => setShowModal(true)}
        variant="outlined"
        rounded="medium"
      />

      <Modal
        {...args}
        title="Modal Title"
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export const Default = {
  args: {
    showModal: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa molestias sapiente fugiat, eius, obcaecati voluptates sint omnis, iure et dolorem placeat accusamus. Animi ab hic quod accusantium non fugiat?",
    onClose: () => {},
    footer: false,
  },
  render: Template,
} as { args: ModalProps };

export const WithFooter = {
  args: {
    showModal: true,
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa molestias sapiente fugiat, eius, obcaecati voluptates sint omnis, iure et dolorem placeat accusamus. Animi ab hic quod accusantium non fugiat?",
    onClose: () => {},
    footer: true,
  },
  render: Template,
} as { args: ModalProps };
