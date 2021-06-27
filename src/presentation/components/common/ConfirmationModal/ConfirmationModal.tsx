import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { Button, Modal } from "../";
import { ConfirmationModalWrapper, Header, Main, Footer } from "./styles";

export interface ConfirmationModalProps {
  title: string;
  mainText: string;
  isOpen: boolean;
  cancelAction: () => void;
  confirmAction: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  mainText,
  confirmButtonText,
  cancelButtonText,
  isOpen,
  cancelAction,
  confirmAction,
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={cancelAction}>
      <ConfirmationModalWrapper>
        <Header>
          <div>{title}</div>
          <Button transparent onClick={cancelAction}>
            <FaTimes />
          </Button>
        </Header>
        <Main>{mainText}</Main>
        <Footer>
          <div></div>
          <div>
            <Button onClick={cancelAction}>
              {cancelButtonText || "Cancel"}
            </Button>
            <Button primary onClick={confirmAction}>
              {confirmButtonText || "Confirm"}
            </Button>
          </div>
        </Footer>
      </ConfirmationModalWrapper>
    </Modal>
  );
};
