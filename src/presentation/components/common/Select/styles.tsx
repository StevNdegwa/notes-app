import styled from "styled-components";
import { Theme } from "../../../../theme";

export const SelectWrapper = styled.select`
width:100%;
height:${({ theme }: { theme: Theme }) => theme.space(10)};
border:1px solid ${({ theme }: { theme: Theme }) => theme.colors("grey", 9)};
background-color:white;
box-shadow:0px 3px 1px ${({ theme }: { theme: Theme }) =>
  theme.colors("grey", 9)};
&>option{
    width:100%;
    border:none;
    box-shadow:none !important;
    &:hover{
        background-color:red;
    }
}
`;
