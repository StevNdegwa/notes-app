import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Theme } from "../../../../theme";

export const ModalWrapper = styled(motion.div)`
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
display:none;
align-items:center;
justify-content:center;
${({ theme }: { theme: Theme }) => css`
z-index:${theme.zIndices("modal")};
`}
`;

export const Overlay = styled(motion.div)`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
background-color:hsla(234, 29%, 26%, 0.6);
text-align:center;
`;

export const Content = styled(motion.div)`
display:inline-block;
position:relative;
${({ theme }: { theme: Theme }) => css`
background-color:${theme.colors("light")};
border-radius:${theme.borderRadius("lg")};
box-shadow:${theme.shadows("md")}
`}
`;