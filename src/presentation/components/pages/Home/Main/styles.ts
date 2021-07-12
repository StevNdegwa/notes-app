import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../ui/theme";

export const MainWrapper = styled.div`
width:100%;
height:100%;
overflow:hidden;
`;

export const MainToolbar = styled.div`
width:100%;
padding:0 3rem;
height:3.5rem;
display:flex;
justify-content:flex-end;
& button{
    width:2.5rem;
    height:2.5rem;
    font-size: 1.5rem;
    border-radius: 50%;
    margin: 0.3rem;
}
${({ theme }: { theme: ThemeType }) => css`
& button{
    box-shadow: 0px 0px 3px ${theme.colors.grey[8]};
}
`}
`;

export const MainContent = styled.div`
height:calc(100% - 5rem);
margin:1rem;
`;