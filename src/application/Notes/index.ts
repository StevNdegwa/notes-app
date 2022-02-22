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
            await this.db.table("note").update(addedNoteId, note);
            return addedNoteId;
        }
    }

    async getAllNotes(): Promise<any> {
        return this.db.table("note").toArray()
    }

    async getWorkspaceNotes(workspace: string): Promise<any> {
        const notes = await this.db.table("note").where({ workspace }).toArray();
        return notes.map((note) => ({ ...note, content: JSON.parse(note.content) }));
    }

    async updateNote(noteId: number, update: Partial<NotesDataType>) {
        return this.db.table("note").update(noteId, update);
    }

    async deleteNote(note: NotesDataType) {
        return this.db.table("note").where("id").equals(note.id!).delete();
    }

    async deleteWorkspaceNotes(workspace: string) {
        return this.db.table("note").where({
            workspace
        }).delete();
    }
}