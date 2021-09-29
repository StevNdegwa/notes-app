import { OutputBlockData } from "@editorjs/editorjs";
import { NotesHeading, NotesOrderedList, NotesParagraph, NotesUnorderedList } from "./styles";

export default function render(block: OutputBlockData, index: number) {
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
