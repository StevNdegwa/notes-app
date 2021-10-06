import { selector } from "recoil";
import { notesAtom } from "./notesAtom";
import { listFilterAtom } from "./listFilterAtom";

export const activeNotesList = selector({
  key: "activeNotesList",
  get: ({ get }) => {
    const notes = get(notesAtom);
    const listFilter = get(listFilterAtom);

    switch (listFilter) {
      case "NORMAL":
        const n1 = [...notes];
        return n1.sort((a) => a.pinned ? -1 : 1)
      case "STARRED":
        const n2 = [...notes];
        return n2.filter((a) => a.starred).sort((a) => a.pinned ? -1 : 1);
      default:
        return [...notes];
    }
  }
})