import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../ui/theme";

export const SidebarWrapper = styled.div`
height:100%;
${({ theme }: { theme: ThemeType }) => css`
background-color:${theme.colors.primary[6]};
box-shadow:0px 2px 2px ${theme.colors.grey[5]};
border-radius:${theme.borderRadius.lg};
`}
@media only screen and (min-width: 730px){
    ${({ theme }: { theme: ThemeType }) => css`
    border-radius:${theme.borderRadius["3xl"]};
    `}
}
`;

export const SidbarHeader = styled.div`
width:100%;
height:40px;
display:flex;
justify-content:center;
align-items:center;
@media only screen and (min-width: 730px){
    height:80px;
}
`;

export const SidebarMain = styled.div`
width:100%;
height:calc(100% - 80px);
text-align:center;
& button{
    color:white !important;
    font-size:2rem;
}
@media only screen and (min-width: 730px){
    height:calc(100% - 140px);
}
`;

export const SidebarFooter = styled.div`
width:100%;
height:40px;
display:flex;
justify-content:center;
align-items:center;
& button{
    font-size:1rem;
    color:white !important;
}
@media only screen and (min-width: 730px){
    height:60px;
    & button{
        font-size:1.5rem;
    }
}
`;