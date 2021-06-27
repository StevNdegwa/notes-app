import { useCallback, useState } from "react";
import { themeFn, ThemeMode, ThemeType, light, dark } from "../ui/theme";
import { ThemeConfigType } from "../ui/theme/types";

export default function useTheme(defaultTheme: ThemeConfigType, defaultMode: ThemeMode) {
    const [theme, setTheme] = useState<{ theme: ThemeType, mode: ThemeMode }>(() => ({
        theme: themeFn(defaultTheme),
        mode: defaultMode
    }));

    const setNewTheme = useCallback((theme: ThemeConfigType, mode: ThemeMode) => {
        setTheme({
            theme: themeFn(theme),
            mode
        });
    }, []);

    const toggleLightDark = useCallback(() => {
        if (theme.mode === ThemeMode.DARK) {
            setNewTheme(light, ThemeMode.LIGHT)
        } else {
            setNewTheme(dark, ThemeMode.DARK);
        }
    }, [theme, setNewTheme]);

    return {
        theme: theme.theme,
        setNewTheme,
        themeMode: theme.mode,
        toggleLightDark
    }
}