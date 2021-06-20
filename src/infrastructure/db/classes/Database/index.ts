import Dexie from "dexie";

export class Database<TableDataTypes> extends Dexie {
    constructor(name: string, stores: { [tableName: string]: string }, version: number = 1) {
        super(name);

        this.version(version).stores(stores);
    }

    dataset(name: string): Dexie.Table<TableDataTypes, number> {
        return this.table(name);
    }
}