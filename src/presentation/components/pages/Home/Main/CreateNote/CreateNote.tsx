import { CreateNoteWrapper } from "./styles";

export const CreateNote = () => {
  return (
    <CreateNoteWrapper
      animate={{
        x: [-200, 0],
      }}
    >
      Create a new note
    </CreateNoteWrapper>
  );
};
