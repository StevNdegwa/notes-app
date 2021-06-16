import { space } from "./space";

export const lineHeights = {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": space["3"],
    "4": space["4"],
    "5": space["5"],
    "6": space["6"],
    "7": space["7"],
    "8": space["8"],
    "9": space["9"],
    "10": space["10"],
}

export type LineHeights = typeof lineHeights;
export type LineHeightsType = keyof LineHeights;