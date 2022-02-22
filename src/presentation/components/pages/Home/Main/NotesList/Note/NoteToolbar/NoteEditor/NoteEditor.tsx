import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { FaEdit } from "react-icons/fa";
import {
  useNotes,
  notesAtom,
  NotesDataType,
} from "../../../../../../../../../application";
import {
  Modal,
  ModalProps,
  useContentEditor,
  ContentEditor,
} from "../../../../../../../common";
import { NoteEditorWrapper } from "./styles";

export interface NoteEditorProps {
  modal: ModalProps;
  note: NotesDataType;
}

export const NoteEditor: FC<NoteEditorProps> = ({
  modal: { isOpen, closeModal },
  note,
}) => {
  const setNotes = useSetRecoilState(notesAtom);
  const notes = useNotes();

  const editNote = useCallback(
    (content: any) => {
      notes
        ?.addNote(
          {
            ...note,
            lastEdited: new Date(),
            content: JSON.stringify(content),
          },
          parseInt(`${note.id}`)
        )
        .then(() => {
          setNotes((notes) => {
            return notes.map((n) => (n.id === note.id ? { ...n, content } : n));
          });
        });
    },
    [note, notes, setNotes]
  );

  const cancleEdit = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const { canSave, saveNote } = useContentEditor(
    "edit_note",
    editNote,
    cancleEdit,
    note.content
  );

  const closeEditModal = useCallback(() => {
    saveNote();
    closeModal();
  }, [closeModal, saveNote]);

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeEditModal}
      title="Edit note"
      titleIcon={FaEdit}
    >
      <NoteEditorWrapper>
        <ContentEditor
          id="edit_note"
          canSave={canSave}
          saveNote={saveNote}
          handleClear={cancleEdit}
        />
      </NoteEditorWrapper>
    </Modal>
  );
};
