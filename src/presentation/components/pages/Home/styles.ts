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
`;

export const HomeTop = styled.section`
width:100%;
height:80px;
line-height:80px;
${({ theme }: { theme: Theme; }) => css`
font-size:${theme.fontSizes("lg")};
font-weight:${theme.fontWeights("semibold")};
padding-left:${theme.space(10)};
border-bottom:1px inset ${theme.colors("primary", 9)};
`}
`;
export const HomeMiddle = styled.section`
width:100%;
height:calc(100% - 120px);
`;
export const HomeBottom = styled.section`
width:100%;
height:40px;
`;