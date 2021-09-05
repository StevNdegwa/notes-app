import { useCallback, useEffect, useState, FC } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "./EditorJSList";
import {
  Notes,
  currentWorkSpaceAtom,
  notesAtom,
} from "../../../../../../application";
import { FaSave, FaTimesCircle } from "react-icons/fa";
import { Button } from "../../../../common";
import {
  CreateNoteWrapper,
  CreateNoteEditor,
  CreateNoteActions,
} from "./styles";

export interface CreateNoteProps {
  data?: any;
}

export const CreateNote: FC<CreateNoteProps> = ({ data }) => {
  const [editor, setEditor] = useState<EditorJS | null>(null);
  const [canSave, setCanSave] = useState<boolean>(false);
  const currentWorkspace = useRecoilValue(currentWorkSpaceAtom);
  const setNotes = useSetRecoilState(notesAtom);

  useEffect(() => {
    setEditor(
      new EditorJS({
        holder: "note_editor",
        data: {
          blocks: [],
        },
        onReady: () => {
          setCanSave(true);
        },
        autofocus: true,
        placeholder: "Let's take notes :)",
        tools: {
          header: {
            class: Header as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
      })
    );
  }, []);

  const saveNote = useCallback(() => {
    editor?.save().then((content) => {
      if (currentWorkspace?.wsRef) {
        new Notes().addNote({
          created: new Date(),
          lastEdited: new Date(),
          workspace: currentWorkspace.wsRef,
          content: JSON.stringify(content),
        });

        setNotes((notes) => [
          ...notes,
          {
            created: new Date(),
            lastEdited: new Date(),
            workspace: currentWorkspace.wsRef,
            content,
          },
        ]);
      }
    });
  }, [currentWorkspace, editor, setNotes]);

  return (
    <CreateNoteWrapper
      animate={{
        x: [-200, 0],
      }}
    >
      <CreateNoteEditor id="note_editor" />
      <CreateNoteActions>
        <Button leftIcon={FaTimesCircle}>Cancel</Button>
        <Button
          primary
          onClick={saveNote}
          leftIcon={FaSave}
          disabled={!canSave}
        >
          Save
        </Button>
      </CreateNoteActions>
    </CreateNoteWrapper>
  );
};
