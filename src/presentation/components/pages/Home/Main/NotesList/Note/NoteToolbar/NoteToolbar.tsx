import { FC, useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { FaEdit, FaStar } from "react-icons/fa";
import { Notes, notesAtom } from "../../../../../../../../application";
import { Button } from "../../../../../../common";
import { NoteToolbarWrapper } from "./styles";

export interface NoteToolbarProps {
  editNote: () => void;
  noteId?: string | number;
  starred: boolean;
}

export const NoteToolbar: FC<NoteToolbarProps> = ({
  editNote,
  noteId,
  starred,
}) => {
  const updateNote = useSetRecoilState(notesAtom);

  const toggleStarred = useCallback(() => {
    new Notes().toggleNoteStarred(parseInt(`${noteId}`) || 0);
    updateNote((notes) =>
      [...notes].map((note) =>
        note.id === noteId ? { ...note, starred: !note.starred } : note
      )
    );
  }, [noteId, updateNote]);

  return (
    <NoteToolbarWrapper>
      <Button transparent onClick={toggleStarred}>
        {starred ? <FaStar color="yellow" /> : <FaStar color="lightgray" />}
      </Button>
      <Button transparent onClick={editNote}>
        <FaEdit />
      </Button>
    </NoteToolbarWrapper>
  );
};
