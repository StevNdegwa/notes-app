import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { popVariant } from "./framer";
import { ModalWrapper, Overlay, Content } from "./styles";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  isFullScreen?: boolean; 
}

export const Modal: FC<ModalProps> = ({ children, isOpen, closeModal, isFullScreen = true }) => {
  const element = useMemo(()=>document.createElement("div"), []);

  useEffect(() => {
    if (isFullScreen) {
      document.body.appendChild(element);
      return () => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
      };
    }
  }, [element, isFullScreen]);

  if (!isFullScreen) {
    return (
      <ModalWrapper
        animate={isOpen ? "show" : "hide"}
        variants={popVariant.wrapper}
      >
        <Overlay variants={popVariant.overlay} onClick={closeModal}></Overlay>
        <Content variants={popVariant.content}>{children}</Content>
      </ModalWrapper>
    );
  }

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
