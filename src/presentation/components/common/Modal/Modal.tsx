import { FC, ReactNode, useCallback, useEffect, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import { IconType } from "react-icons";
import { createPortal } from "react-dom";
import { popVariant } from "./framer";
import {
  ModalWrapper,
  Overlay,
  Content,
  CloseModal,
  ModalTitle,
} from "./styles";

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  isFullScreen?: boolean;
  titleIcon?: IconType;
  title: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  closeModal,
  isFullScreen = true,
  title,
  titleIcon: TitleIcon
}) => {
  const element = useMemo(() => document.createElement("div"), []);

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

  const closeByEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
    } else {
      document.removeEventListener("keydown", closeByEscape);
    }
  }, [isOpen, closeByEscape]);

  if (!isFullScreen) {
    return (
      <ModalWrapper
        animate={isOpen ? "show" : "hide"}
        variants={popVariant.wrapper}
      >
        <Overlay variants={popVariant.overlay} onClick={closeModal}></Overlay>
        <Content variants={popVariant.content}>
          <ModalTitle>
            {TitleIcon && <TitleIcon />}&nbsp;
            {title}
          </ModalTitle>
          {children}
        </Content>
      </ModalWrapper>
    );
  }

  return createPortal(
    <ModalWrapper
      animate={isOpen ? "show" : "hide"}
      variants={popVariant.wrapper}
    >
      <Overlay variants={popVariant.overlay} onClick={closeModal}></Overlay>
      <Content variants={popVariant.content}>
        <CloseModal transparent onClick={closeModal}>
          <FaTimes />
        </CloseModal>
        <ModalTitle>
          {TitleIcon && <TitleIcon />}&nbsp;
          {title}
        </ModalTitle>
        {children}
      </Content>
    </ModalWrapper>,
    element
  );
};
