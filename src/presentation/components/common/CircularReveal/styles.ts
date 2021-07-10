import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";
import { motion } from "framer-motion";


export const CircularRevealWrapper = styled(motion.div)`
position:absolute;
width:100%;
height:100%;
overflow:hidden;
display:block;
${({ theme }: { theme: ThemeType }) => css`
z-index:${theme.zIndices.tooltip};
`}
`;

export const Circle = styled(motion.div)`
position:absolute;
width:5px;
height:5px;
border-radius:50%;
top:0px;
right:0px;
`;