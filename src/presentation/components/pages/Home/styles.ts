import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../ui/theme";
import { Button } from "../../common";

export const HomeWrapper = styled(motion.div)`
width:100vw;
height:100vh;
display:flex;
${({ theme }: { theme: ThemeType }) => css`
background-color:${theme.body.backgroundColor};
color:${theme.body.color};
`}
`;

export const HomeAside = styled.aside`
height:100%;
width:60px;
padding:0.5rem;
@media only screen and (min-width: 730px){
    width:100px;
    padding:0.5rem;
}
`;

export const HomeMain = styled.main`
width:100%;
`;

export const HomeTop = styled.section`
width:100%;
height:40px;
line-height:40px;
display:flex;
justify-content:space-between;
${({ theme }: { theme: ThemeType; }) => css`
font-size:${theme.fontSizes.md};
font-weight:${theme.fontWeights.semibold};
padding:0 ${theme.space[4]};
border-bottom:1px inset ${theme.colors.primary[0]};
`}
@media only screen and (min-width: 730px){
    height:60px;
    line-height:60px;
    ${({ theme }: { theme: ThemeType; }) => css`
    font-size:${theme.fontSizes.lg};
    font-weight:${theme.fontWeights.semibold};
    padding:0 ${theme.space[8]};
    `}
}
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

export const ThemeToggle = styled(Button)`
width:40px;
border-radius:50%;
& span.dark{
    color:hsla(182, 100%, 49%, 1);
}
& span.light{
    color:hsla(50, 89%, 50%, 1);
}
${({ theme }: { theme: ThemeType }) => css`
box-shadow: 0px 0px 5px inset ${theme.colors.primary[6]};
`}
`;