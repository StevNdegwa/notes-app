import { useState, useCallback, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "./EditorJSList";
import { FeedbackTypes } from "../../../../../../shared";
import {
  Notes,
  currentWorkSpaceAtom,
  notesAtom,
  notificationsAtom,
} from "../../../../../../application";


export default function useNoteEditor(data: any) {
  const [editor, setEditor] = useState<EditorJS | null>(null);
  const [canSave, setCanSave] = useState<boolean>(false);
  const [addedNoteId, setAddedNoteId] = useState<undefined | number>(undefined);
  const currentWorkspace = useRecoilValue(currentWorkSpaceAtom);
  const setNotes = useSetRecoilState(notesAtom);
  const setNotifications = useSetRecoilState(notificationsAtom);

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
    editor
      ?.save()
      .then((content) => {
        if (currentWorkspace?.wsRef) {
          new Notes().addNote({
            created: new Date(),
            lastEdited: new Date(),
            workspace: currentWorkspace.wsRef,
            content: JSON.stringify(content),
          }, addedNoteId).then((id) => {
            setAddedNoteId(id as number);
          })

          setNotes((notes) => {
            if (addedNoteId === undefined) {
              return [
                ...notes,
                {
                  created: new Date(),
                  lastEdited: new Date(),
                  workspace: currentWorkspace.wsRef,
                  content,
                },
              ]
            } else {
              let n = [...notes];

              n[n.length - 1] = {
                created: new Date(),
                lastEdited: new Date(),
                workspace: currentWorkspace.wsRef,
                content,
              }

              return n;
            }
          });
        }
      })
      .then(() => {
        setNotifications((n) => [
          ...n,
          {
            content: !!addedNoteId ? "Note has been updated" : "New note added",
            feedback: FeedbackTypes.SUCCESS
          },
        ]);
      })
      .catch((error) => {
        setNotifications((n) => [
          ...n,
          { content: "Error creating note", feedback: FeedbackTypes.ERROR },
        ]);
      });
  }, [currentWorkspace?.wsRef, editor, setNotes, setNotifications, addedNoteId]);

  const handleClear = useCallback(() => {
    editor?.clear();
    setAddedNoteId(undefined)
    setNotifications((n) => {
      const nn = [...n];
      nn.push({
        content: "Successfully cleared",
        feedback: FeedbackTypes.SUCCESS,
      });
      return nn;
    });
  }, [editor, setNotifications]);

  return { editor, handleClear, saveNote, canSave };

}