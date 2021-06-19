export const shadows = {
    none: "none",
    sm: "0px 1px 2px hsla(212, 25%, 75%, 1)",
    md: "0px 3px 8px hsla(212, 25%, 75%, 1)",
    lg: "0px 4px 12px hsla(212, 25%, 75%, 1)",
    xl: "0px 6px 20px hsla(212, 25%, 75%, 1)"
};

export type Shadows = typeof shadows;
export type ShadowsType = keyof Shadows;