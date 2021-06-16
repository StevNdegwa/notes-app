import { listenerCount } from "events";
import { Database } from "../../infrastructure/db/classes";


export interface NotesType {
    id: number;
    note: string;
    created: Date;
}

export class Notes {
    db: Database<NotesType>;

    constructor() {
        this.db = new Database<NotesType>("notes", 1, { key: "list", columns: ["++id", "note", "created"] })
    }
}