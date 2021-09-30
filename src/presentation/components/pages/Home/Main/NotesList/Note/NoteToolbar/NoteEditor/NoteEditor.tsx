import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import {
  Notes,
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

  const editNote = useCallback(
    (content: any) => {
      new Notes()
        .addNote(
          {
            ...note,
            lastEdited: new Date(),
            content: JSON.stringify(content),
          },
          parseInt(`${note.id}`)
        )
        .then(() => {
          setNotes((notes) => {
            return notes.map((n) =>
              n.id === note.id ? { ...n, content } : n
            );
          });
        });
    },
    [note, setNotes]
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

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
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
