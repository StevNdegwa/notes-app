import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../ui/theme";

export const ModalWrapper = styled(motion.div)`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:none;
justify-content:center;
${({ theme }: { theme: ThemeType }) => css`
z-index:${theme.zIndices.modal};
`}
@media only screen and (min-width: 730px){
    align-items:center;
}
`;

export const Overlay = styled(motion.div)`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
background-color:hsla(234, 29%, 26%, 0.6);
`;

export const Content = styled(motion.div)`
display:inline-block;
position:relative;
height:fit-content;
width:100%;
${({ theme }: { theme: ThemeType }) => css`
background-color:${theme.body.backgroundColor};
color:${theme.body.color};
border-radius:${theme.borderRadius["xl"]};
`}
@media only screen and (min-width: 730px){
    height:auto;
    width:fit-content;
    ${({ theme }: { theme: ThemeType }) => css`
    box-shadow:0px 0px 15px ${theme.colors.grey[6]};
    `}
}
`;