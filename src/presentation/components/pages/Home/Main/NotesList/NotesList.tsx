import { FC } from "react";
import { useRecoilValue } from "recoil";
import { OutputBlockData } from "@editorjs/editorjs";
import { notesAtom } from "../../../../../../application";
import {
  NotesListWrapper,
  Note,
  NotesOrderedList,
  NotesUnorderedList,
  NotesHeading,
  NotesParagraph,
} from "./styles";

export interface NotesListProps {
  width: string;
}

export const NotesList: FC<NotesListProps> = ({ width }) => {
  const notes = useRecoilValue(notesAtom);

  return (
    <NotesListWrapper animate={{ x: [-200, 0] }} style={{ width }}>
      {notes.map(({ content, id }) => {
        return (
          <Note key={id}>
            {content.blocks.map((block: OutputBlockData, index: number) => {
              return render(block, index);
            })}
          </Note>
        );
      })}
    </NotesListWrapper>
  );
};

function render(block: OutputBlockData, index: number) {
  switch (block.type) {
    case "header":
      return <NotesHeading key={index}>{block.data.text}</NotesHeading>;
    case "paragraph":
      return <NotesParagraph key={index}>{block.data.text}</NotesParagraph>;
    case "list":
      return block.data.style === "ordered" ? (
        <NotesOrderedList key={index}>
          {block.data.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </NotesOrderedList>
      ) : (
        <NotesUnorderedList key={index}>
          {block.data.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </NotesUnorderedList>
      );
    default:
      return <div key={index}>{block.data.text}</div>;
  }
}
