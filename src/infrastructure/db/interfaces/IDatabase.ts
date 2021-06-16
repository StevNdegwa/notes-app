import Dexie from "dexie";

export interface IDatabase {
    name: string;
    version: number;
    dbRef: Dexie;
}