import styled from "styled-components";
import { Theme } from "../../../../theme";

export const CreateWorkspaceWrapper = styled.div`
width:100%;
height:100%;
padding:10rem 4rem;
`;

export const CreateWorkspaceActions = styled.div`
height:${({ theme }: { theme: Theme }) => theme.space(14)};
display:flex;
align-items:center;
`;