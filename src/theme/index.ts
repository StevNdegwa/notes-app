import {
    borderRadius,
    BorderRadiusType,
    colors,
    ColorsType,
    ColorsIndex,
    fonts,
    FontsType,
    fontSizes,
    FontSizesType,
    fontWeights,
    FontWeightsType,
    lineHeights,
    LineHeightsType,
    space,
    SpaceType,
    shadows,
    ShadowsType,
    letterSpacings,
    LetterSpacingType,
    zIndices,
    ZIndicesType
} from "./";

const theme = {
    colors: (type: ColorsType, index?: ColorsIndex) => {
        return Array.isArray(colors[type]) ? colors[type][index || 5] : colors[type];
    },
    fonts: (font: FontsType) => {
        return fonts[font];
    },
    borderRadius: (size: BorderRadiusType) => {
        return borderRadius[size];
    },
    fontWeights: (weight: FontWeightsType) => {
        return fontWeights[weight];
    },
    fontSizes: (size: FontSizesType) => {
        return fontSizes[size];
    },
    space: (s: SpaceType) => {
        return space[s];
    },
    lineHeights: (height: LineHeightsType) => {
        return lineHeights[height];
    },
    shadows: (size: ShadowsType) => {
        return shadows[size];
    },
    letterSpacing: (spacing: LetterSpacingType) => {
        return letterSpacings[spacing];
    },
    zIndices: (type: ZIndicesType) => {
        return zIndices[type];
    }
}

export * from "./GlobalStyle";
export * from "./borderRadius";
export * from "./colors";
export * from "./fontSizes";
export * from "./fontWeights";
export * from "./fonts";
export * from "./lineHeights";
export * from "./shadows";
export * from "./space";
export * from "./letterSpacings";
export * from "./zIndices";

export type Theme = typeof theme;
export default theme;