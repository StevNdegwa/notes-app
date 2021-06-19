import Dexie from "dexie";

export class Database<DataType> extends Dexie {
    dataset: Dexie.Table<DataType, number>;

    constructor(name: string, config: { key: string, columns: Array<string> }, version: number = 1) {
        super(name);

        this.version(version).stores({
            [config.key]: config.columns.join(",")
        })

        this.dataset = this.table(config.key)
    }
}