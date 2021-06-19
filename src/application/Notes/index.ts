import { listenerCount } from "events";
import { Database } from "../../infrastructure/db/classes";


export interface NotesType {
    id: number;
    note: string;
    created: Date;
}

export class Notes {
    db: Database<NotesType>;

    constructor(name: string) {
        this.db = new Database<NotesType>(`${name}_note`, { key: "notes", columns: ["++id", "text", "created"] }, 1)
    }
}