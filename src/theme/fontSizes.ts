import { space } from "./space";

export const fontSizes = {
    xs: space["3"],
    sm: space["3.5"],
    md: space["4"],
    lg: space["4.1"],
    xl: space["5"],
    "2xl": space["6"],
    "3xl": space["7.5"],
    "4xl": space["9"],
    "5xl": space["12"],
    "6xl": space["14.5"],
    "7xl": space["18"],
    "8xl": space["24"],
    "9xl": space["32"],
}

export type FontSizes = typeof fontSizes;
export type FontSizesType = keyof FontSizes;