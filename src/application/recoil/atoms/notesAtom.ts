import { atom } from "recoil";

export const notesAtom = atom<Array<any>>({
  key: "notes",
  default: []
});
