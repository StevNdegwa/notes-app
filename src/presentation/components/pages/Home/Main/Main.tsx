import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { FaPlus, FaArrowAltCircleLeft } from "react-icons/fa";
import { NotesDataType } from "../../../../../application";
import { Button, Tooltip, TooltipPosition, useModal } from "../../../common";
import { MainWrapper, MainToolbar, MainContent } from "./styles";
import { CreateNote } from "./CreateNote";
import { NotesList } from "./NotesList";

export type ShowType = "LIST" | "EDITOR" | "VIEW";

export const Main = () => {
  const [showing, setShowing] = useState<ShowType>("LIST");
  const [editNote, setEditNote] = useState<NotesDataType | undefined>(
    undefined
  );
  const content = useRef<HTMLDivElement | null>(null);
  const slides = useRef<HTMLDivElement | null>(null);
  const { isOpen, closeModal, openModal } = useModal({ isOpen: false });

  const { width, wrapperWidth } = useMemo<{
    width: number;
    wrapperWidth: number;
  }>(() => {
    if (!content.current) {
      return { width: 0, wrapperWidth: 0 };
    } else {
      return {
        width: content.current.getBoundingClientRect().width,
        wrapperWidth: content.current.getBoundingClientRect().width * 2,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.current]);

  const moveToList = useCallback(() => {
    setShowing("LIST");
    openModal();
  }, [openModal]);

  const moveToEditor = useCallback(() => {
    setShowing("EDITOR");
  }, []);

  const startEditingNote = useCallback((note: NotesDataType) => {
    setEditNote(note);
    setShowing("EDITOR");
  }, []);

  useEffect(() => {
    if (content.current) {
      if (showing === "LIST") {
        content.current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (showing === "EDITOR") {
        content.current.scrollTo({ left: width, behavior: "smooth" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content.current, showing, width]);

  return (
    <MainWrapper>
      <MainToolbar>
        {showing === "EDITOR" && (
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
      <MainContent ref={content}>
        <div
          ref={slides}
          style={{
            width: `${wrapperWidth}px`,
            height: "100%",
          }}
        >
          <NotesList width={`${width}px`} setEditNote={startEditingNote} />
          <CreateNote
            width={`${width}px`}
            modal={{ isOpen, closeModal }}
            data={editNote}
          />
        </div>
      </MainContent>
    </MainWrapper>
  );
};
