import { FC, useCallback } from "react";
import { OutputBlockData } from "@editorjs/editorjs";
import render from "./render";
import { NoteToolbar } from "./NoteToolbar";
import { NoteWrapper, NoteContent } from "./styles";
import { NotesDataType } from "../../../../../../../application";

export interface NoteProps {
  note: NotesDataType;
  setEditNote: (note: NotesDataType) => void;
}

export const Note: FC<NoteProps> = ({ note, setEditNote }) => {
  const editNote = useCallback(() => {
    setEditNote(note);
  }, [setEditNote, note]);

  return (
    <NoteWrapper>
      <NoteToolbar editNote={editNote} noteId={note.id} starred={note.starred} />
      <NoteContent>
        {note.content.blocks.map((block: OutputBlockData, index: number) =>
          render(block, index)
        )}
      </NoteContent>
    </NoteWrapper>
  );
};
