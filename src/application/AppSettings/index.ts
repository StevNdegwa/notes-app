import { Database } from "../../infrastructure/db/classes";

export interface IUserProfile {
    id?: number;
    name: string;
    ref: string;
}

export type IAppSettings = IUserProfile;

export class AppSettings {
    db: Database<IAppSettings>;

    constructor() {
        this.db = new Database<IAppSettings>(
            "app_settings", {
            userProfile: "++id,name, ref"
        }, 1);

        this.db.on("populate", () => {
            this.db.dataset("userProfile").add({ name: "Stranger", ref: "currentUser" })
        });
    }

    async updateUserProfile(newUserProfile: IUserProfile) {
        const currentUserProfile = await this.db.dataset("userProfile").where("ref").equals("currentUser");

        return currentUserProfile.modify(newUserProfile).then((res) => {
            console.log(res)
        });
    }
}