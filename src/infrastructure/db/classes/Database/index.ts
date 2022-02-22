import Dexie from "dexie";

export class Database<TableDataTypes> extends Dexie {
    constructor(name: string, stores: { [tableName: string]: string }, version: number = 1) {
        super(name);
        this.version(version).stores(stores);
    }

    dataset(name: string): Dexie.Table<TableDataTypes, number> {
        return this.table(name);
    }

    static getDB(name: string, version: number, stores: { [tableName: string]: string }): Dexie {
        let db = new Dexie(name);
        db.version(version).stores(stores);
        return db;
    }

}