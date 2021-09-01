import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useCallback, useEffect, useState } from "react";
import { FaSave, FaTimesCircle } from "react-icons/fa";
import { Button } from "../../../../common";
import {
  CreateNoteWrapper,
  CreateNoteEditor,
  CreateNoteActions,
} from "./styles";

export const CreateNote = () => {
  const [editor, setEditor] = useState<EditorJS | null>(null);

  useEffect(() => {
    setEditor(
      new EditorJS({
        holder: "note_editor",
        tools: {
          header: Header,
        },
      })
    );
  }, []);

  const saveNote = useCallback(() => {
    editor?.save().then((data) => {
      console.log(data);
    });
  }, [editor]);

  return (
    <CreateNoteWrapper
      animate={{
        x: [-200, 0],
      }}
    >
      <CreateNoteEditor id="note_editor" />
      <CreateNoteActions>
        <Button leftIcon={FaTimesCircle}>Cancel</Button>
        <Button primary onClick={saveNote} leftIcon={FaSave}>
          Save
        </Button>
      </CreateNoteActions>
    </CreateNoteWrapper>
  );
};
