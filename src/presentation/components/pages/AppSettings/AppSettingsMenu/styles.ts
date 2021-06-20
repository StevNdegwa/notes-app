import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";


export const MenuWrapper = styled.div`
width:100%;
height:100%;
`;

export const MenuItem = styled.div`
display:flex;
justify-content:space-between;
cursor:pointer;
&>div{
    width:100%;
    height:100%;
    line-height:inherit;
}
${({ theme }: { theme: Theme }) => css`
height:${theme.space(10)};
line-height:${theme.lineHeights(10)};
font-weight:${theme.fontWeights("semibold")};
&>button{
    width:${theme.space(8)};
}
`}
`;