import { useState, useCallback, useEffect } from "react";
import EditorJS, { ToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "./EditorJSList";

const defaultData = {
  blocks: [],
}

export function useContentEditor(containerId: string, saveCallback: (data: any) => void, clearCallback: () => void, data?: any) {
  const [editor, setEditor] = useState<EditorJS | null>(null);
  const [canSave, setCanSave] = useState<boolean>(false);

  useEffect(() => {
    setEditor(
      new EditorJS({
        holder: containerId,
        data: data || defaultData,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveNote = useCallback(() => {
    editor
      ?.save()
      .then((content) => Promise.resolve(saveCallback(content)))
  }, [editor, saveCallback]);

  const handleClear = useCallback(() => {
    editor?.clear();
    Promise.resolve(clearCallback())
  }, [clearCallback, editor]);

  return { editor, handleClear, saveNote, canSave };
}