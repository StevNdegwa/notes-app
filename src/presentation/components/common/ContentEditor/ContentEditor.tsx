import { FC } from "react";
import { FaTimesCircle, FaSave } from "react-icons/fa";
import { Button } from "../Button";
import {
  ContentEditorWrapper,
  EditorContainer,
  ContentEditorActions,
} from "./styles";

export interface ContentEditorProps {
  id: string;
  handleClear: () => void;
  saveNote: () => void;
  canSave: boolean;
  cancelButtonLabel?: string;
  saveButtonLabel?: string;
}

export const ContentEditor: FC<ContentEditorProps> = ({
  id,
  handleClear,
  saveNote,
  canSave,
  cancelButtonLabel,
  saveButtonLabel,
}) => {
  return (
    <ContentEditorWrapper>
      <EditorContainer id={id} />
      <ContentEditorActions>
        <Button leftIcon={FaTimesCircle} onClick={handleClear}>
          {cancelButtonLabel || "Cancel"}
        </Button>
        <Button
          primary
          onClick={saveNote}
          leftIcon={FaSave}
          disabled={!canSave}
        >
          {saveButtonLabel || "Save"}
        </Button>
      </ContentEditorActions>
    </ContentEditorWrapper>
  );
};
