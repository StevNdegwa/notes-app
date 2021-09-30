import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { FaEdit, FaStar, FaThumbtack, FaTrash } from "react-icons/fa";
import {
  useNotes,
  notesAtom,
  NotesDataType,
} from "../../../../../../../../application";
import { Button, useModal } from "../../../../../../common";
import { NoteEditor } from "./NoteEditor";
import { NoteToolbarWrapper } from "./styles";

export interface NoteToolbarProps {
  note: NotesDataType;
}

export const NoteToolbar: FC<NoteToolbarProps> = ({ note }) => {
  const { id, starred, pinned } = note;
  const updateNote = useSetRecoilState(notesAtom);
  const notes = useNotes();
  const { isOpen, closeModal, openModal } = useModal();

  const toggleStarred = useCallback(() => {
    notes?.toggleNoteStarred(parseInt(`${id}`) || 0);
    updateNote((notes) =>
      [...notes].map((note) =>
        note.id === id ? { ...note, starred: !note.starred } : note
      )
    );
  }, [id, notes, updateNote]);

  const editNote = useCallback(() => {
    openModal();
  }, [openModal]);

  return (
    <NoteToolbarWrapper>
      <Button transparent>
        {pinned ? <FaThumbtack /> : <FaThumbtack color="lightgrey" />}
      </Button>
      <Button transparent onClick={toggleStarred}>
        {starred ? <FaStar color="#FDD835" /> : <FaStar color="lightgray" />}
      </Button>
      <Button transparent onClick={editNote}>
        <FaEdit />
      </Button>
      <Button transparent>
        <FaTrash />
      </Button>
      {isOpen && <NoteEditor modal={{ isOpen, closeModal }} note={note} />}
    </NoteToolbarWrapper>
  );
};
