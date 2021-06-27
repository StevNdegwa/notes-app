import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const Wrapper = styled.div`
width:100%;
transition:box-shadow 100ms;
${({ focused, theme }: { focused: boolean; theme: ThemeType }) => css`
    border-bottom:1px solid ${theme.colors.primary[6]};
    box-shadow:none;
    ${focused && css`
        box-shadow:0px 2px 1px ${theme.colors.primary[7]};
    ` }
`}
`;

export const Input = styled.input`
display:inline-block;
height:100%;
width:100%;
padding-left:0.5rem;
font-size: 1rem;
border: none;
background-color:transparent;
&:focus{
    outline: none;
}

${({ theme }: { theme: ThemeType }) => css`  
    height:${theme.space[8]};
`}
`;

export const Label = styled.label`
font-weight:500;
padding-left:0.3rem;
${({ theme }: { theme: ThemeType }) => css`  
line-height:${theme.space[4]};
color: ${theme.colors.grey[7]};
`}
`