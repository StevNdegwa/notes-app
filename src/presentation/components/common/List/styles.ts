import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const ListWrapper = styled.ul`
width:100%;
list-style-type:none;
background-color:white;
${({ theme }: { theme: ThemeType }) => css`
padding:${theme.space[1]};
&>li{
    text-align:left;
    margin:${theme.space[1]};
    padding:${theme.space[1]};
    border-radius:${theme.borderRadius.sm};
    color:${theme.colors.primary[6]};
    background-color:transparent;
    transition:background-color 100ms;
    &:hover{
        background-color:${theme.colors.grey[0]};
        box-shadow:0px 0px 2px ${theme.colors.grey[1]};
    }
}
`};
`;