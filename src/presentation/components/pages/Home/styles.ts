import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../ui/theme";

export const HomeWrapper = styled(motion.div)`
${({ theme }: { theme: ThemeType }) => css`
width:100vw;
height:100vh;
display:grid;
grid-template-columns: 100px calc(100% - 165px) 65px;
grid-template-rows: 100%;
grid-template-areas: 'aside main tools';
background-color:${theme.body.backgroundColor};
color:${theme.body.color};
`}
`;

export const HomeAside = styled.aside`
height:100%;
grid-area: aside;
@media only screen and (min-width: 730px){
    width:100px;
}
`;

export const HomeMain = styled.main`
grid-area: main;
`;

export const HomeTop = styled.section`
${({ theme }: { theme: ThemeType; }) => css`
width:calc(100% - 1rem);
height:40px;
line-height:40px;
display:flex;
justify-content:space-between;
font-size:${theme.fontSizes.md};
font-weight:${theme.fontWeights.semibold};
padding:0 ${theme.space[4]};
@media only screen and (min-width: 730px){
    height:60px;
    line-height:60px;
    font-size:${theme.fontSizes.lg};
    font-weight:${theme.fontWeights.semibold};
    padding:0 ${theme.space[8]};
}
`}
`;
export const HomeMiddle = styled.section`
width:100%;
height:calc(100% - 70px);
`;

export const HomeBottom = styled.section`
width:100%;
height:5px;
@media only screen and (min-width: 730px){
    height:10px;
}
`;