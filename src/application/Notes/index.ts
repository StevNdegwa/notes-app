import { Database } from "../../infrastructure/db/classes";
import { INote } from "../interfaces";

export type NotesDataType = INote;

export class Notes {
    db: Database<NotesDataType>;

    constructor() {
        this.db = new Database<NotesDataType>("notes",
            {
                note: "++id,created,lastEdited,content,workspace"
            },
            1
        );
    }

    addNote(note: NotesDataType) {
        return this.db.table("note").put(note);
    }

    getAllNotes() {
        return this.db.table("note").toArray()
    }

    getWorkspaceNotes(workspace: string) {
        return this.db.table("note").where({ workspace }).toArray().then((notes) => notes.map((note) => ({ ...note, content: JSON.parse(note.content) })));
    }
}