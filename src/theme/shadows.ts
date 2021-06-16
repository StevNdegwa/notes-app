export const shadows = {
    0: "none",
    1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
    2: "0px 8px 30px rgba(0, 0, 0, 0.24)",
};

export type Shadows = typeof shadows;
export type ShadowsType = keyof Shadows;