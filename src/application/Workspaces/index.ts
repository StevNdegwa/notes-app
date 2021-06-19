import { Database } from "../../infrastructure/db/classes";


export interface WorkspaceType {
    id?: number;
    wsRef: string;
    name: string;
}

export class Workspaces {
    static async createWorkspace(name: string) {
        var list = new Database<WorkspaceType>("workspaces", { key: "list", columns: ["++id", "name", "wsRef"] }, 1).dataset;

        let wsRef = name.replaceAll(" ", "_");

        return new Promise<string>((resolve, reject) => {
            try {
                list.where("wsRef").equalsIgnoreCase(wsRef).toArray((workspaces: Array<WorkspaceType>) => {
                    if (workspaces.length === 0) {
                        list.put({
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
        return new Database<WorkspaceType>("workspaces", { key: "list", columns: ["++id", "name", "wsRef"] }, 1).dataset.toArray();
    }
}