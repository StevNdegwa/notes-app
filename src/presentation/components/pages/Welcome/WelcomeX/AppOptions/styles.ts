import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../../ui/theme";

export const AppOptionsWrapper = styled.div`
border:none;
width:180px;
padding:0;
cursor:pointer;
position:absolute;
right:5px;
overflow:hidden;
font-size:1rem;
line-height:1;
${({ theme }: { theme: ThemeType }) => css`
border-radius:${theme.borderRadius.md};
box-shadow:0px 0px 3px ${theme.colors.grey[6]};
z-index:${theme.zIndices.popover};
`};
`;