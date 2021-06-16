import { space } from "./space";

export const borderRadius = {
    none: "0",
    sm: space["0.5"],
    base: space["1"],
    md: space["1.5"],
    lg: space["2"],
    xl: space["3"],
    "2xl": space["4"],
    "3xl": space["6"]
}


export type BorderRadius = typeof borderRadius;
export type BorderRadiusType = keyof BorderRadius;