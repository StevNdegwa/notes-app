import { Database } from "../../infrastructure/db/classes";


export interface NotesType {
    id: number;
    note: string;
    created: Date;
}

export type NotesDataTypes = NotesType;

export class Notes {
    db: Database<NotesDataTypes>;

    constructor(name: string) {
        this.db = new Database<NotesDataTypes>(`${name}_note`, { notes: "++id,text,created" }, 1);
    }
}