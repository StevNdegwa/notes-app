import { Database } from "../../infrastructure/db/classes";
import { IUserProfile } from "../interfaces";

export type IAppSettings = IUserProfile;

export class AppSettings {
    db: Database<IAppSettings>;

    constructor() {
        this.db = new Database<IAppSettings>(
            "app_settings", {
            userProfile: "++id,name, ref",
            theme: ""
        }, 1);

        this.db.on("populate", () => {
            this.db.dataset("userProfile").add({ name: "Stranger", ref: "currentUser" })
        });
    }

    async updateUserProfile(newUserProfile: IUserProfile) {
        const currentUserProfile = await this.db.dataset("userProfile").where("ref").equals("currentUser");

        return currentUserProfile.modify(newUserProfile).then((res) => {
            console.log(newUserProfile)
        });
    }
}