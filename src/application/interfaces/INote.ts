export interface INote {
    id: number | string;
    created: Date;
    lastEdited: Date;
    title: string;
    shortText: string;
    workspace: string;
    content: {
        text: string;
    }
}