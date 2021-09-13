import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../../../ui/theme";

export const NotesListWrapper = styled(motion.ul)`
padding-top:0.5rem;
display:inline-block;
height:100%;
overflow:auto;
`;

export const Note = styled.li`
${({ theme }: { theme: ThemeType }) => css`
list-style-type:none;
margin:1rem;
margin-top:0.5rem;
padding:0.5rem;
& h3{
    line-height:2.5rem;
    padding-left:0.5rem;
}
border-radius: ${theme.borderRadius.md};
box-shadow: 0px 1px 1px ${theme.colors.grey[5]};
& h3{
    font-weight: ${theme.fontWeights.medium};
}
`}
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

export const NotesUnorderedList = styled.ul`
width:90%;
margin:auto;
`;

export const NotesOrderedList = styled.ol`
width:90%;
margin:auto;
`;

export const NotesHeading = styled.h2`
font-weight:600;
font-size:1.3rem;
margin:0.5rem 0;
`;

export const NotesParagraph = styled.p`
line-height:1.5;
`;
