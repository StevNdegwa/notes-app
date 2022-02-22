import styled, { css } from "styled-components";
import { ThemeType } from "../../../../../ui/theme";

export const ExportWorkspaceWrapper = styled.div`
width:500px;
height: 300px;
display:flex;
justify-content:space-around;
align-items:center;
`;

export const ExportOption = styled.button`
${({ theme }: { theme: ThemeType }) => css`
background-color:transparent;
border:none;
width:200px;
height: 200px;
border-radius: 25px;
cursor:pointer;
font-size: 3rem;
border: 1px solid ${theme.colors.grey[1]};
&:hover{
  border: 1px solid ${theme.colors.grey[2]};
  box-shadow: 0px 0px 0.5rem ${theme.colors.grey[1]};
}
transition: box-shadow 200ms;
& > img{
  width: 70%;
  height: 70%;
}

`}
`;
