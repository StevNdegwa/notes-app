import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../ui/theme";


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
${({ theme }: { theme: ThemeType }) => css`
height:${theme.space[10]};
line-height:${theme.space[10]};
font-weight:${theme.fontWeights.semibold};
&>button{
    width:${theme.space[8]};
}
`}
`;