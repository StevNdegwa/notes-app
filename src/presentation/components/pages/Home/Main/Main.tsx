import { useCallback, useState } from "react";
import { FaPlus, FaArrowAltCircleLeft } from "react-icons/fa";
import { Button, Tooltip, TooltipPosition } from "../../../common";
import { MainWrapper, MainToolbar, MainContent } from "./styles";
import { CreateNote } from "./CreateNote";
import { NotesList } from "./NotesList";

export type ShowType = "LIST" | "NOTE_EDITOR" | "NOTE_VIEW";

export const Main = () => {
  const [showing, setShowing] = useState<ShowType>("LIST");

  const show = useCallback((showing: ShowType) => {
    switch (showing) {
      case "LIST":
        return <NotesList />;
      case "NOTE_EDITOR":
        return <CreateNote />;
    }
  }, []);

  const moveToList = useCallback(() => {
    setShowing("LIST");
  }, []);

  const moveToEditor = useCallback(() => {
    setShowing("NOTE_EDITOR");
  }, []);

  return (
    <MainWrapper>
      <MainToolbar>
        {showing === "NOTE_EDITOR" && (
          <Tooltip content="Go back" position={TooltipPosition.LEFT}>
            <Button primary onClick={moveToList}>
              <FaArrowAltCircleLeft />
            </Button>
          </Tooltip>
        )}
        {showing === "LIST" && (
          <Tooltip content="Add a note" position={TooltipPosition.LEFT}>
            <Button primary onClick={moveToEditor}>
              <FaPlus />
            </Button>
          </Tooltip>
        )}
      </MainToolbar>
      <MainContent>{show(showing)}</MainContent>
    </MainWrapper>
  );
};
