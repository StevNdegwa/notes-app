import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../../../ui/theme";

export const NotesListWrapper = styled(motion.ul)`
padding-top:0.5rem;
display:inline-block;
height:100%;
overflow:auto;
`;

export const Preamble = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:100%;
cursor:pointer;
padding:0.5rem;
box-shadow:none;
transition:box-shadow 200;
border-radius: ${theme.borderRadius.md};
&:hover{
    box-shadow: 0px 0px 3px inset ${theme.colors.grey[2]};
}
`}
`;

export const NoteControls = styled.div`
width:100%;
height:4rem;
& button{
    height:2rem;
    margin:1rem;
}
`;

export const EmptyNotesList = styled.li`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;
text-align:center;
& p{
    line-height: 2;
    font-size: 1.2rem;
    font-style:italic;
}
`