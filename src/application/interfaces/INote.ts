import { IndexableType } from "dexie";
export interface INote {
    id?: IndexableType;
    created: Date;
    lastEdited: Date;
    workspace: string;
    content: any;
    starred: boolean;
    pinned: boolean;
}