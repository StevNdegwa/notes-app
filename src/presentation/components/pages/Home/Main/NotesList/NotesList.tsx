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

export const NotesList: FC<{}> = () => {
  const notes = useRecoilValue(notesAtom);

  console.log(notes);

  return (
    <NotesListWrapper animate={{ x: [-200, 0] }}>
      {notes.map(({ content, id }) => {
        return (
          <Note key={id}>
            {content.blocks.map((block: OutputBlockData) => {
              return render(block);
            })}
          </Note>
        );
      })}
    </NotesListWrapper>
  );
};

function render(block: OutputBlockData) {
  switch (block.type) {
    case "header":
      return <NotesHeading>{block.data.text}</NotesHeading>;
    case "paragraph":
      return <NotesParagraph>{block.data.text}</NotesParagraph>;
    case "list":
      return block.data.style === "ordered" ? (
        <NotesOrderedList>
          {block.data.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </NotesOrderedList>
      ) : (
        <NotesUnorderedList>
          {block.data.items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </NotesUnorderedList>
      );
    default:
      return <div>{block.data.text}</div>;
  }
}
