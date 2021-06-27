import { createContext } from "react";
import { IAppData, defaultAppData } from "./application/Application";
import { ThemeMode } from "./ui/theme";

export default createContext<
    { appData: IAppData } &
    {
        loadApp?: Function,
        setNewTheme?: Function,
        themeMode?: ThemeMode,
        toggleLightDark?: Function
    }
>({ appData: defaultAppData });