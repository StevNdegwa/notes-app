import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const Wrapper = styled.div`
width:100%;
transition:box-shadow 100ms;
${({ focused, theme }: { focused: boolean; theme: Theme }) => css`  
    height:${({ theme }: { theme: Theme }) => theme.space(10)};
    border-bottom:1px solid ${theme.colors("primary")};
    box-shadow:none;
    ${focused && css`
        box-shadow:0px 2px 1px ${theme.colors("primary", 7)};
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
`;

export const Label = styled.label`
font-weight:600;
line-height:30px;
padding-left:0.3rem;
`