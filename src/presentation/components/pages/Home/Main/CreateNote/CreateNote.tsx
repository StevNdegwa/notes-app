import { useCallback, FC } from "react";
import { FaSave, FaTimesCircle, FaBook, FaBookOpen } from "react-icons/fa";
import { Button, Modal } from "../../../../common";
import { NotesDataType } from "../../../../../../application";
import useNoteEditor from "./useNoteEditor";
import {
  CreateNoteWrapper,
  CreateNoteEditor,
  CreateNoteActions,
  ContinueNew,
} from "./styles";

export interface CreateNoteProps {
  data?: NotesDataType;
  width: string;
  modal: {
    isOpen: boolean;
    closeModal: () => void;
  };
}

export const CreateNote: FC<CreateNoteProps> = ({
  data,
  width,
  modal: { isOpen, closeModal },
}) => {
  const { canSave, handleClear, saveNote } = useNoteEditor(data?.content);

  const startNewNote = useCallback(() => {
    handleClear();
    closeModal();
  }, [closeModal, handleClear]);

  const noop = useCallback(() => {
    return;
  }, []);

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
      <Modal isOpen={isOpen} closeModal={noop} isFullScreen={false}>
        <ContinueNew>
          <Button primary onClick={closeModal} leftIcon={FaBookOpen}>
            Continue editing
          </Button>
          <Button onClick={startNewNote} leftIcon={FaBook}>
            {" "}
            Start new note
          </Button>
        </ContinueNew>
      </Modal>
    </CreateNoteWrapper>
  );
};
