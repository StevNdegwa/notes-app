import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const ConfirmationModalWrapper = styled.div`
width:400px;
`;

export const Header = styled.header`
width:100%;
height:40px;
line-height:40px;
display:flex;
justify-content:space-between;
padding:0 1rem;
${({ theme }: { theme: Theme }) => css`
font-weight:${theme.fontWeights("semibold")};
`}
`;

export const Main = styled.main`
width:100%;
padding:0.7rem;
text-align:center;
`;

export const Footer = styled.footer`
width:100%;
padding:0.8rem;
display:flex;
justify-content:space-between;
align-items:space-between;
& button{
    margin-left:1rem;
}
`;