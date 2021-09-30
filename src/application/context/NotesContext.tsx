import { createContext, FC, useContext } from "react";
import { Notes } from "../Notes";

export const NotesContext = createContext<Notes | null>(null);

export const NotesProvider: FC = ({ children }) => (
  <NotesContext.Provider value={new Notes()}>{children}</NotesContext.Provider>
);

export function useNotes() {
  return useContext(NotesContext);
}