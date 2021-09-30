import { FC } from "react";
import { FaPlus } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { notesAtom, NotesDataType } from "../../../../../../application";
import { Note } from "./Note";
import { Button } from "../../../../common";
import { NotesListWrapper, EmptyNotesList } from "./styles";

export interface NotesListProps {
  width: string;
  moveToEditor: () => void;
}

export const NotesList: FC<NotesListProps> = ({ width, moveToEditor }) => {
  const notes = useRecoilValue(notesAtom);

  return (
    <NotesListWrapper animate={{ x: [-200, 0] }} style={{ width }}>
      {notes.length ? (
        notes.map((note: NotesDataType, index) => (
          <Note key={index} note={note} />
        ))
      ) : (
        <EmptyNotesList>
          <div>
            <p>
              <lottie-player
                src="https://assets7.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></lottie-player>
            </p>
            <div>
              <Button leftIcon={FaPlus} primary onClick={moveToEditor}>
                Create your first note
              </Button>
            </div>
          </div>
        </EmptyNotesList>
      )}
    </NotesListWrapper>
  );
};
