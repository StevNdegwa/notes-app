import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { popVariant } from "./framer";
import { ModalWrapper, Overlay, Content } from "./styles";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, closeModal }) => {
  const element = useMemo(()=>document.createElement("div"), []);

  useEffect(() => {
    document.body.appendChild(element);
    return () => {
      if (document.body.contains(element)) {
        document.body.removeChild(element);
      }
    };
  }, [element]);

  return createPortal(
    <ModalWrapper
      animate={isOpen ? "show" : "hide"}
      variants={popVariant.wrapper}
    >
      <Overlay variants={popVariant.overlay} onClick={closeModal}></Overlay>
      <Content variants={popVariant.content}>{children}</Content>
    </ModalWrapper>,
    element
  );
};
