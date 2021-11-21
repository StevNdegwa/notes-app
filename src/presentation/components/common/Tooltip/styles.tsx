import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";
import { TooltipPosition } from "./TooltipPosition";

export const TooltipContent = styled.div`
  position: absolute;
  padding: 0.5rem;
  font-size: 0.8rem;
  white-space: nowrap;
  top: 25%;
  user-select:none;
  &::before {
    content:" ";
    position: absolute;
    width: 0px;
    height: 0px;
    background-color: transparent;
    border: 5px solid transparent;
  }
  ${({ position, theme }: { position: TooltipPosition, theme: ThemeType }) => {
    switch (position) {
      case TooltipPosition.RIGHT:
        return css`
          left: 120%;
          &::before {
            left:-10px;
            border-right-color: ${theme.colors.dark};
          }
        `;
      case TooltipPosition.LEFT:
        return css`
          right: 120%;
          &::before {
            left: 100%;
            border-left-color: ${theme.colors.dark};
          }
        `;
      default:
        return css`
          left: 120%;
          top: 0;
          &::before {
            content: " ";
            left: -3px;
            transform: rotate(45deg);
          }
        `;
    }
  }}
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
