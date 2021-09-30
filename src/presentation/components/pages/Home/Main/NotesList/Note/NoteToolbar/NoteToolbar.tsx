import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { FaEdit, FaStar, FaThumbtack } from "react-icons/fa";
import {
  Notes,
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
  const { isOpen, closeModal, openModal } = useModal();

  const toggleStarred = useCallback(() => {
    new Notes().toggleNoteStarred(parseInt(`${id}`) || 0);
    updateNote((notes) =>
      [...notes].map((note) =>
        note.id === id ? { ...note, starred: !note.starred } : note
      )
    );
  }, [id, updateNote]);

  const editNote = useCallback(() => {
    openModal();
  }, [openModal]);

  return (
    <NoteToolbarWrapper>
      <Button transparent>
        {pinned ? <FaThumbtack /> : <FaThumbtack color="lightgrey" />}
      </Button>
      <Button transparent onClick={toggleStarred}>
        {starred ? <FaStar color="yellow" /> : <FaStar color="lightgray" />}
      </Button>
      <Button transparent onClick={editNote}>
        <FaEdit />
      </Button>
      {isOpen && <NoteEditor modal={{ isOpen, closeModal }} note={note} />}
    </NoteToolbarWrapper>
  );
};
