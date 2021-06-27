import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const InputWrapper = styled.input`
display:block;
border:none;
width:100%;
line-height:1;
&:focus{
    outline:none;
}
${({ theme }: { theme: ThemeType; }) => css`
background-color: ${theme.colors.primary[0]};
height: ${theme.space[10]};
border-radius: ${theme.borderRadius.md};
padding-left: ${theme.space[2]};
font-size:${theme.fontSizes.md};
`}
`;