export const letterSpacings = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
}

export type LetterSpacing = typeof letterSpacings;
export type LetterSpacingType = keyof LetterSpacing;