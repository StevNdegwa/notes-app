export interface INote {
    id?: number | string;
    created: Date;
    lastEdited: Date;
    workspace: string;
    content: any;
    starred: boolean;
    pinned: boolean;
}