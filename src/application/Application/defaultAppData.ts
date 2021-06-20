import { IUserProfile } from "../AppSettings";

export const defaultAppData: IAppData = {
    userProfile: {
        name: "Stranger",
        ref: "currentUser"
    }
}

export interface IAppData {
    userProfile: IUserProfile
}