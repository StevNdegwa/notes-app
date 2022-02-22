import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { ThemeType } from "../../../../ui/theme";

export const ModalWrapper = styled(motion.div)`
${({ theme }: { theme: ThemeType }) => css`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:none;
justify-content:center;
z-index:${theme.zIndices.modal};
@media only screen and (min-width: 730px){
    align-items:center;
}
`}
`;

export const ModalTitle = styled.div`
height: 2rem;
padding-left: 1rem;
display: flex;
align-items: center;
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
${({ theme }: { theme: ThemeType }) => css`
display:inline-block;
position:relative;
height:fit-content;
width:100%;
background-color:${theme.body.backgroundColor};
color:${theme.body.color};
border-radius:${theme.borderRadius["xl"]};
overflow: hidden;
@media only screen and (min-width: 730px){
    height:auto;
    width:fit-content;
    box-shadow:0px 0px 15px ${theme.colors.grey[6]};
}
`}
`;

export const CloseModal = styled(Button)`
${({ theme }: { theme: ThemeType }) => css`
position:absolute;
right: 5px;
top:5px;
font-size: 1.2rem;
z-index:${theme.zIndices.modal};
`}
`;
