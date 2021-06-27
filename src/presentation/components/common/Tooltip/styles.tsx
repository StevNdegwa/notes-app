import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const TooltipContent = styled.div`
  position: absolute;
  padding: 0.5rem;
  left: 120%;
  top: 0;
  font-size: 0.8rem;
  word-break: nowrap;
  &::before {
    content: " ";
    color: red;
    position: absolute;
    left: -3px;
    border: solid black;
    border-width: 5px;
    transform: rotate(45deg);
  }
  ${({ theme }: { theme: ThemeType }) => css`
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.dark};
    color: ${theme.colors.light};
    font-weight: ${theme.fontWeights.medium};
    z-index: ${theme.zIndices.tooltip};
    box-shadow: 0px 0px 3px ${theme.colors.grey[3]};
  `}
`;

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
