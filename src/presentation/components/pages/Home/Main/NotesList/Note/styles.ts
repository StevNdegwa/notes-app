import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../../../ui/theme";

export const NoteWrapper = styled.li`
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

export const NotesHeading = styled.h2`
font-weight:600;
font-size:1.3rem;
margin:0.5rem 0;
`;

export const NotesUnorderedList = styled.ul`
width:90%;
margin:auto;
`;

export const NotesOrderedList = styled.ol`
width:90%;
margin:auto;
`;

export const NotesParagraph = styled.p`
line-height:1.5;
`;

export const NoteContent = styled.div`
width:100%;
`;