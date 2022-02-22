import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../../ui/theme";

export const WorkspaceItemWrapper = styled.li`
${({ theme }: { theme: ThemeType }) => css`
width: 100%;
height: 3rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;
border-radius: 0.5rem;
&:hover{
  border: 1px solid ${theme.colors.grey[1]};
}
`}
`;
