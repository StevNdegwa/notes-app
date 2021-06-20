import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

export const SectionsLayoutWrapper = styled.div`
width:100%;
height:100%;
`;

export const SectionsLayoutHeader = styled.header`
width:100%;
height:40px;
${({ theme }: { theme: Theme }) => css`
& *{
    line-height:${theme.lineHeights(6)};
}
`}
`;

export const SectionsLayoutMain = styled.main`
width:100%;
height:calc(100% - 40px);
`;