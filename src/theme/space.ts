import { rem } from "polished";

const baseSize = "16px";

export const space = {
    px: "1px",
    0: "0",
    0.5: rem("2px", baseSize),
    1: rem("4px", baseSize),
    1.5: rem("6px", baseSize),
    2: rem("8px", baseSize),
    2.5: rem("10px", baseSize),
    3: rem("12px", baseSize),
    3.5: rem("14px", baseSize),
    4: rem(baseSize, baseSize),
    4.1: rem("18px", baseSize),
    5: rem("20px", baseSize),
    6: rem("24px", baseSize),
    7: rem("28px", baseSize),
    7.5: rem("30px", baseSize),
    8: rem("32px", baseSize),
    9: rem("36px", baseSize),
    10: rem("40px", baseSize),
    12: rem("48px", baseSize),
    14: rem("56px", baseSize),
    14.5: rem("60px", baseSize),
    16: rem("64px", baseSize),
    18: rem("72px", baseSize),
    20: rem("80px", baseSize),
    24: rem("96px", baseSize),
    28: rem("112px", baseSize),
    32: rem("128px", baseSize),
    36: rem("144px", baseSize),
    40: rem("160px", baseSize),
    44: rem("192px", baseSize),
    48: rem("192px", baseSize),
    52: rem("208px", baseSize),
    56: rem("224px", baseSize),
    60: rem("240px", baseSize),
    64: rem("256px", baseSize),
    72: rem("288px", baseSize),
    80: rem("320px", baseSize),
    96: rem("384px", baseSize),
};

export type Space = typeof space;
export type SpaceType = keyof Space;