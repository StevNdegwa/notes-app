import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const SelectWrapper = styled.select`
  width: 100%;
  background-color: white;
  ${({ theme }: { theme: ThemeType }) => css`
    height: ${theme.space[10]};
    border: 1px solid ${theme.colors.grey[9]};
    box-shadow: 0px 3px 1px ${theme.colors.grey[9]};
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
