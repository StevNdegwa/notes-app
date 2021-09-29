import { IndexableType } from "dexie";
import { Database } from "../../infrastructure/db/classes";
import { INote } from "../interfaces";

export type NotesDataType = INote;

export class Notes {
    db: Database<NotesDataType>;

    constructor() {
        this.db = new Database<NotesDataType>("notes",
            {
                note: "++id,created,lastEdited,content,workspace,starred,pinned"
            },
            1
        );
    }

    async addNote(note: NotesDataType, addedNoteId: number | undefined): Promise<number | IndexableType> {
        if (addedNoteId === undefined) {
            return this.db.table("note").put(note, addedNoteId);
        } else {
            return this.db.table("note").update(addedNoteId, note).then(() => addedNoteId);
        }
    }

    getAllNotes() {
        return this.db.table("note").toArray()
    }

    getWorkspaceNotes(workspace: string) {
        return this.db.table("note").where({ workspace }).toArray().then((notes) => notes.map((note) => ({ ...note, content: JSON.parse(note.content) })));
    }

    async toggleNoteStarred(noteId: number) {
        return this.db.table("note").where("id").equals(noteId).first().then((note) => this.db.table("note").update(noteId, { starred: !note.starred }));
    }
}