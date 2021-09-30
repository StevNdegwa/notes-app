import { FC } from "react";
import { OutputBlockData } from "@editorjs/editorjs";
import { NotesDataType } from "../../../../../../../application";
import render from "./render";
import { NoteToolbar } from "./NoteToolbar";
import { NoteWrapper, NoteContent } from "./styles";
export interface NoteProps {
  note: NotesDataType;
}

export const Note: FC<NoteProps> = ({ note }) => {
  return (
    <NoteWrapper>
      <NoteToolbar note={note} />
      <NoteContent>
        {note.content.blocks.map((block: OutputBlockData, index: number) =>
          render(block, index)
        )}
      </NoteContent>
    </NoteWrapper>
  );
};
