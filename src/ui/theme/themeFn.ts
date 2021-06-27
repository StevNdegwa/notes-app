import { colors } from "./colors";
import { containerSizes, space } from "./container";
import { fontFamilies, fontSizes, fontWeights } from "./font";
import { zIndices } from "./position";
import { borderRadius, borderSizes } from "./border";
import { ThemeConfigType } from "./types";


export function themeFn(styles: ThemeConfigType) {

    
    return {
        body: {
            backgroundColor: styles.global?.bg || colors.light,
            color: styles.global?.color || colors.dark
        },
        link: {
            color: styles.actions?.color || colors.primary[6]
        },
        button: {
            color: styles.actions?.color || colors.light,
            transparent: colors.transparent,
            backgroundColor: styles.actions?.bg || colors.primary[6]
        },
        icon: {
            color: styles.icons?.color || colors.primary[9]
        },
        nav: {
            color: styles.highlight?.color || colors.light,
            backgroundColor: styles.highlight?.bg || colors.primary[6]
        },
        colors,
        containerSizes,
        padding: space,
        margin: space,
        fontWeights,
        fontFamilies,
        fontSizes,
        zIndices,
        space,
        borderSizes,
        borderRadius
    }
}

export function extendTheme(currentTheme: ThemeConfigType, themeExtension: ThemeConfigType) {
    const defaultTheme = themeFn(currentTheme);

    return {
        ...defaultTheme,
        themeExtension
    }
}

export type ThemeType = ReturnType<typeof themeFn>;