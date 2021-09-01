import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../../../ui/theme";

export const CreateNoteWrapper = styled(motion.div)`
width:100%;
height:100%;
${({ theme }: { theme: ThemeType }) => css`
border-radius: ${theme.borderRadius.md};
box-shadow: 0px 0px 2px ${theme.colors.grey[5]};
`}
`;


export const CreateNoteHeader = styled.div`
width:100%;
`;
