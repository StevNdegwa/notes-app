import { useCallback, FC } from "react";
import { FaSave, FaTimesCircle } from "react-icons/fa";
import { Button, Modal } from "../../../../common";
import useNoteEditor from "./useNoteEditor";
import {
  CreateNoteWrapper,
  CreateNoteEditor,
  CreateNoteActions,
  ContinueNew,
} from "./styles";

export interface CreateNoteProps {
  data?: any;
  width: string;
  modal: {
    isOpen: boolean;
    closeModal: () => void;
  }
}

export const CreateNote: FC<CreateNoteProps> = ({ data, width, modal: { isOpen, closeModal } }) => {
  const { canSave, handleClear, saveNote } = useNoteEditor(data);

  const startNewNote = useCallback(() => {
    handleClear()
    closeModal();
  }, [closeModal, handleClear]);

  return (
    <CreateNoteWrapper style={{ width }}>
      <CreateNoteEditor id="note_editor" />
      <CreateNoteActions>
        <Button leftIcon={FaTimesCircle} onClick={handleClear}>
          Clear
        </Button>
        <Button
          primary
          onClick={saveNote}
          leftIcon={FaSave}
          disabled={!canSave}
        >
          Save
        </Button>
      </CreateNoteActions>
      <Modal isOpen={isOpen} closeModal={closeModal} isFullScreen={false}>
        <ContinueNew>
          <Button primary onClick={closeModal}>
            Continue editing
          </Button>
          <Button primary onClick={startNewNote}>
            {" "}
            New note
          </Button>
        </ContinueNew>
      </Modal>
    </CreateNoteWrapper>
  );
};
