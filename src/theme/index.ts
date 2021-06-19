import { borderRadius, BorderRadiusType } from "./borderRadius";
import { colors, ColorsType, ColorsIndex } from "./colors";
import { fontSizes, FontSizesType } from "./fontSizes";
import { fontWeights, FontWeightsType } from "./fontWeights";
import { fonts, FontsType } from "./fonts";
import { lineHeights, LineHeightsType } from "./lineHeights";
import { shadows, ShadowsType } from "./shadows";
import { space, SpaceType } from "./space";
import { letterSpacings, LetterSpacingType } from "./letterSpacings";
import { zIndices, ZIndicesType } from "./zIndices";

const theme = {
    colors: (type: ColorsType, index?: ColorsIndex): string => {
        return Array.isArray(colors[type]) ? colors[type][index || 3] : String(colors[type]) ;
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

export type Theme = typeof theme;
export default theme;