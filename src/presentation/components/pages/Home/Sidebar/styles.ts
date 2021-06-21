import styled, { css } from "styled-components";
import { Theme } from "../../../../../theme";

export const SidebarWrapper = styled.div`
height:100%;
${({ theme }: { theme: Theme }) => css`
background-color:${theme.colors("primary")};
box-shadow:0px 0px 2px ${theme.colors("primary")};
border-radius:${theme.borderRadius("3xl")};
`}
`;

export const SidbarHeader = styled.div`
width:100%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
`;

export const SidebarMain = styled.div`
width:100%;
height:calc(100% - 120px);
`;

export const SidebarFooter = styled.div`
width:100%;
height:60px;
display:flex;
justify-content:center;
align-items:center;
& button{
    font-size:1.5rem;
    color:white !important;
}
`;