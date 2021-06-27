import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const ConfirmationModalWrapper = styled.div`
width:100%;
@media only screen and (min-width: 730px){
    width:400px;
}
`;

export const Header = styled.header`
width:100%;
height:30px;
line-height:30px;
display:flex;
justify-content:space-between;
padding:0 0.5rem;
${({ theme }: { theme: ThemeType }) => css`
font-weight:${theme.fontWeights.semibold};
`}
@media only screen and (min-width: 730px){
    height:40px;
    line-height:40px;
    padding:0 1rem;
}
`;

export const Main = styled.main`
width:100%;
padding:0.7rem;
text-align:center;
@media only screen and (min-width: 730px){
    padding:0.5rem;
}
`;

export const Footer = styled.footer`
width:100%;
padding:0.4rem;
display:flex;
justify-content:space-between;
align-items:center;
& button{
    margin-left:0.5rem;
}
@media only screen and (min-width: 730px){
    padding:0.8rem;
    display:flex;
    & button{
        margin-left:1;
    }
}
`;