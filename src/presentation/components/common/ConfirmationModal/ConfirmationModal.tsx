import { FC } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Button } from "../Button";
import { Modal } from "../Modal";
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
    <Modal isOpen={isOpen} closeModal={cancelAction} title={""}>
      <ConfirmationModalWrapper>
        <Header>
          <div>{title}</div>
        </Header>
        <Main>{mainText}</Main>
        <Footer>
          <div></div>
          <div>
            <Button onClick={cancelAction} leftIcon={FaTimesCircle}>
              {cancelButtonText || "Cancel"}
            </Button>
            <Button primary onClick={confirmAction} leftIcon={FaCheckCircle}>
              {confirmButtonText || "Confirm"}
            </Button>
          </div>
        </Footer>
      </ConfirmationModalWrapper>
    </Modal>
  );
};
