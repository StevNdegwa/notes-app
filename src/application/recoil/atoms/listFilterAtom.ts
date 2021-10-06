import { atom } from "recoil";

export type NotesListFilterType = "STARRED" | "NORMAL";

export const listFilterAtom = atom<NotesListFilterType>({
  key: "listFilter",
  default: "NORMAL"
})