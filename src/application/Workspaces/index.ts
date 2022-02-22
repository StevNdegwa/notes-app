import { Database } from "../../infrastructure/db/classes";


export interface WorkspaceListType {
    id?: number;
    wsRef: string;
    name: string;
}

export type WorkspacesDataTypes = WorkspaceListType;

export class Workspaces {
    static async createWorkspace(name: string) {
        const db = new Database<WorkspacesDataTypes>("workspaces", { list: "++id,name,wsRef" }, 1);

        let wsRef = name.replaceAll(" ", "_");

        return new Promise<string>((resolve, reject) => {
            try {
                db.dataset("list").where("wsRef").equalsIgnoreCase(wsRef).toArray((workspaces: Array<WorkspaceListType>) => {
                    if (workspaces.length === 0) {
                        db.dataset("list").put({
                            name,
                            wsRef
                        })

                        resolve(name);
                    } else {
                        reject(new Error("A workspace by that name already exists"))
                    }
                })
            } catch (error: any) {
                reject(error);
            }
        })
    }

    static async workSpacesList() {
        return new Database<WorkspacesDataTypes>("workspaces", { list: "++id,name,wsRef" }, 1).dataset("list").toArray();
    }

    static async deleteWorkSpace(workspace: WorkspacesDataTypes) {
        return new Database<WorkspacesDataTypes>("workspaces", { list: "++id,name,wsRef" }).dataset("list").where("id").equals(workspace.id!).delete();
    }
}