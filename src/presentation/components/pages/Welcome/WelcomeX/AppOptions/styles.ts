import styled, { css } from "styled-components";
import { Theme } from "../../../../../../theme";

export const AppOptionsWrapper = styled.div`
border:none;
width:180px;
padding:0;
cursor:pointer;
position:absolute;
right:5px;
overflow:hidden;
font-size:1rem;
${({ theme }: { theme: Theme }) => css`
line-height:${theme.lineHeights(6)};
border-radius:${theme.borderRadius("md")};
box-shadow:${theme.shadows("md")};
z-index:${theme.zIndices("popover")}
`};
`;