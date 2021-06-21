import { AppSettings } from "../AppSettings";
import { defaultAppData } from "./defaultAppData";

export interface NotesAppConfig {
    installed?: boolean;
}

export class Application {
    appSettings: AppSettings;

    constructor() {
        this.appSettings = new AppSettings();
    }

    async install() {

        return Promise.all([
            this.appSettings.db.dataset("userProfile").put({ name: "Stranger", ref: "currentUser" })
        ]).catch(() => {
            this.appSettings.db.delete();
        })
    }

    async load() {
        let appConfig: NotesAppConfig = JSON.parse(localStorage.getItem("NOTES_APP_CONFIG") || "{}"),
            appData = { ...defaultAppData };

        if (!appConfig.installed) {

            await this.install().then(() => {
                appConfig.installed = true;
            });

        } else {
            let userProfile = await this.appSettings.db.dataset("userProfile").where("ref").equals("currentUser").first();
            if (userProfile) {
                appData.userProfile = userProfile;
            }
        }

        localStorage.setItem("NOTES_APP_CONFIG", JSON.stringify(appConfig));

        return appData;

    }

}

export * from "./defaultAppData";