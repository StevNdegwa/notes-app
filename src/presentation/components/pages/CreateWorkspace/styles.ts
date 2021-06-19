import styled from "styled-components";
import { Theme } from "../../../../theme";

export const CreateWorkspaceWrapper = styled.div`
width:100%;
height:100%;
`;

export const CreateWorkspaceHeader = styled.div`
width:100%;
height:60px;
border-bottom:1px inset ${({ theme }: { theme: Theme }) => theme.colors("primary", 9)};
& button{
    height:100%;
    width:60px;
    font-size:1.7rem;
}
`;

export const CreateWorkspaceMain = styled.main`
padding:3rem 4rem;
height:calc(100% - 120px);
`;

export const CreateWorkspaceFooter = styled.footer`
width:100%;
height:60px
`;