import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const SelectWrapper = styled.select`
  width: 100%;
  background-color: white;
  ${({ theme }: { theme: Theme }) => css`
    height: ${theme.space(10)};
    border: 1px solid ${theme.colors("grey", 9)};
    box-shadow: 0px 3px 1px ${theme.colors("grey", 9)};
  `}
  &>option {
    width: 100%;
    border: none;
    box-shadow: none !important;
    &:hover {
      background-color: red;
    }
  }
`;
