import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../ui/theme";
import { Button } from "../../../common";

export const ToolsBarWrapper = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:65px;
height:100%;
grid-area:tools;
display:flex;
box-shadow: -1px 0px 5px ${theme.colors.grey[4]};
flex-direction:column;
align-items:center;
`}
`;

export const Tool = styled(Button)`
${({ theme }: { theme: ThemeType }) => css`
margin:10px 0;
font-size:1.3rem;
width:40px;
height:40px;
border:none;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 0px 0px 5px inset ${theme.colors.primary[4]};
`}
`;

export const ThemeToggle = styled(Tool)`
& span.dark{
    color:hsla(182, 100%, 49%, 1);
}
& span.light{
    color:hsla(50, 89%, 50%, 1);
}
`;