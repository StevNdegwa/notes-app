import { Database } from "../../infrastructure/db/classes";
import { INote } from "../interfaces";

export type NotesDataTypes = INote;

export class Notes {
    db: Database<NotesDataTypes>;

    constructor() {
        this.db = new Database<NotesDataTypes>("notes",
            {
                notes: "++id,created,lastEdited,title,shortText,content,workspace"
            },
            1
        );
    }
}