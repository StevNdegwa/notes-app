import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../ui/theme";

export const MainWrapper = styled.div`
width:100%;
height:100%;
overflow:hidden;
`;

export const MainToolbar = styled.div`
${({ theme }: { theme: ThemeType }) => css`
width:100%;
padding:0 ${theme.space[6]};
height:3.5rem;
display:flex;
justify-content:space-between;
align-items:center;
& button{
    width:2.5rem;
    height:2.5rem;  
    font-size: 1.5rem;
    border-radius: 50%;
    margin: 0.3rem;
}
& button{
    box-shadow: 0px 0px 3px ${theme.colors.grey[8]};
}
`}
`;

export const MainContent = styled.div`
${({ theme }: { theme: ThemeType }) => css`
height:calc(100% - 4.5rem);
overflow:hidden;
margin:0.5rem;
border-radius: ${theme.borderRadius.md};
box-shadow: 0px 0px 5px ${theme.colors.grey[3]};
max-width:100%;
&>div{
    display:flex;
}
`}
`;
