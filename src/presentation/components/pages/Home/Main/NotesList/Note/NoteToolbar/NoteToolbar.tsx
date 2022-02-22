import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { FaEdit, FaStar, FaThumbtack, FaTrash } from "react-icons/fa";
import {
  useNotes,
  notesAtom,
  NotesDataType,
} from "../../../../../../../../application";
import { Button, useModal, ConfirmationModal } from "../../../../../../common";
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
  const {
    isOpen: deleteModalOpen,
    closeModal: closeDeleteModal,
    openModal: openDeleteModal,
  } = useModal();

  const toggleStarred = useCallback(() => {
    notes?.updateNote(id as number, { starred: !starred });
    updateNote((notes) =>
      [...notes].map((note) =>
        note.id === id ? { ...note, starred: !note.starred } : note
      )
    );
  }, [id, notes, starred, updateNote]);

  const togglePinned = useCallback(() => {
    notes?.updateNote(id as number, { pinned: !pinned });
    updateNote((notes) =>
      [...notes].map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  }, [id, notes, pinned, updateNote]);

  const editNote = useCallback(() => {
    openModal();
  }, [openModal]);

  const confirmDelete = useCallback(() => {
    notes?.deleteNote(note).then(() => {
      updateNote((notes) => [...notes].filter((n) => note.id !== n.id));
    });
    closeDeleteModal();
  }, [closeDeleteModal, note, notes, updateNote]);

  return (
    <NoteToolbarWrapper>
      <Button transparent onClick={togglePinned}>
        {pinned ? <FaThumbtack /> : <FaThumbtack color="lightgrey" />}
      </Button>
      <Button transparent onClick={toggleStarred}>
        {starred ? <FaStar color="#FDD835" /> : <FaStar color="lightgray" />}
      </Button>
      <Button transparent onClick={editNote}>
        <FaEdit />
      </Button>
      <Button transparent onClick={openDeleteModal}>
        <FaTrash />
      </Button>
      {isOpen && (
        <NoteEditor modal={{ isOpen, closeModal, title: "" }} note={note} />
      )}
      {deleteModalOpen && (
        <ConfirmationModal
          title="Delete note"
          mainText="Are you sure you want to delete this note?"
          confirmAction={confirmDelete}
          cancelAction={() => closeDeleteModal()}
          isOpen={deleteModalOpen}
        />
      )}
    </NoteToolbarWrapper>
  );
};
