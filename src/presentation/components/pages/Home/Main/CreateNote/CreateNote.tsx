import { useCallback, FC, useState } from "react";
import { FaBook, FaBookOpen } from "react-icons/fa";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  Button,
  Modal,
  useContentEditor,
  ContentEditor,
} from "../../../../common";
import {
  NotesDataType,
  notesAtom,
  currentWorkSpaceAtom,
  useNotes,
  notificationsAtom,
} from "../../../../../../application";
import { FeedbackTypes } from "../../../../../../shared";
import { CreateNoteWrapper, ContinueNew } from "./styles";

export interface CreateNoteProps {
  data?: NotesDataType;
  width: string;
  modal: {
    isOpen: boolean;
    closeModal: () => void;
  };
}

export const CreateNote: FC<CreateNoteProps> = ({
  data,
  width,
  modal: { isOpen, closeModal },
}) => {
  const currentWorkspace = useRecoilValue(currentWorkSpaceAtom);
  const setNotes = useSetRecoilState(notesAtom);
  const [addedNoteId, setAddedNoteId] = useState<undefined | number>(undefined);
  const setNotifications = useSetRecoilState(notificationsAtom);
  const notes = useNotes();

  const createNewNote = useCallback(
    (note: any) => {
      return new Promise((resolve, reject) => {
        if (currentWorkspace?.wsRef) {
          notes
            ?.addNote(
              {
                created: new Date(),
                lastEdited: new Date(),
                workspace: currentWorkspace.wsRef,
                content: JSON.stringify(note),
                starred: false,
                pinned: false,
              },
              addedNoteId
            )
            .then((id) => {
              setAddedNoteId(id as number);
            });

          setNotes((notes) => {
            if (addedNoteId === undefined) {
              return [
                ...notes,
                {
                  created: new Date(),
                  lastEdited: new Date(),
                  workspace: currentWorkspace.wsRef,
                  content: note,
                  starred: false,
                  pinned: false,
                },
              ];
            } else {
              let n = [...notes];

              n[n.length - 1] = {
                created: new Date(),
                lastEdited: new Date(),
                workspace: currentWorkspace.wsRef,
                content: note,
                starred: false,
                pinned: false,
              };

              return n;
            }
          });
          resolve(true);
        } else {
          reject();
        }
      })
        .then(() => {
          setNotifications((n) => [
            ...n,
            {
              content: !!addedNoteId
                ? "Note has been updated"
                : "New note added",
              feedback: FeedbackTypes.SUCCESS,
            },
          ]);
        })
        .catch(() => {
          setNotifications((n) => [
            ...n,
            {
              content: "Error creating note",
              feedback: FeedbackTypes.ERROR,
            },
          ]);
        });
    },
    [addedNoteId, currentWorkspace?.wsRef, notes, setNotes, setNotifications]
  );

  const clearNote = useCallback(() => {
    setAddedNoteId(undefined);
    setNotifications((n) => {
      const nn = [...n];
      nn.push({
        content: "Successfully cleared",
        feedback: FeedbackTypes.SUCCESS,
      });
      return nn;
    });
  }, [setNotifications]);

  const { canSave, handleClear, saveNote } = useContentEditor(
    "create_note",
    createNewNote,
    clearNote,
    data?.content
  );

  const startNewNote = useCallback(() => {
    handleClear();
    closeModal();
  }, [closeModal, handleClear]);

  const noop = useCallback(() => {
    return;
  }, []);

  return (
    <CreateNoteWrapper style={{ width }}>
      <ContentEditor
        id="create_note"
        canSave={canSave}
        saveNote={saveNote}
        handleClear={handleClear}
        cancelButtonLabel="Clear"
      />
      <Modal isOpen={isOpen} closeModal={noop} isFullScreen={false}>
        <ContinueNew>
          <Button primary onClick={closeModal} leftIcon={FaBookOpen}>
            Continue editing
          </Button>
          <Button onClick={startNewNote} leftIcon={FaBook}>
            {" "}
            Start new note
          </Button>
        </ContinueNew>
      </Modal>
    </CreateNoteWrapper>
  );
};
