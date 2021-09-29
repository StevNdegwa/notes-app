import { FC } from "react";
import { useRecoilValue } from "recoil";
import { notesAtom, NotesDataType } from "../../../../../../application";
import { Note } from "./Note";
import { NotesListWrapper } from "./styles";

export interface NotesListProps {
  width: string;
  setEditNote: (note: NotesDataType) => void;
}

export const NotesList: FC<NotesListProps> = ({ width, setEditNote }) => {
  const notes = useRecoilValue(notesAtom);

  return (
    <NotesListWrapper animate={{ x: [-200, 0] }} style={{ width }}>
      {notes.map((note: NotesDataType, index) => (
        <Note key={index} note={note} setEditNote={setEditNote} />
      ))}
    </NotesListWrapper>
  );
};
