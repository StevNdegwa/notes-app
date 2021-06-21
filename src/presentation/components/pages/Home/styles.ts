import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const HomeWrapper = styled.div`
width:100%;
height:100%;
display:flex;
${({ theme }: { theme: Theme }) => css`
background-color:${theme.colors("light")};
`}
`;

export const HomeAside = styled.aside`
height:100%;
width:100px;
padding:0.5rem;
`;

export const HomeMain = styled.main`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;