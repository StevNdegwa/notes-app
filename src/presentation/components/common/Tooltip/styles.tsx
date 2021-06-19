import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

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
  ${({ theme }: { theme: Theme }) => css`
    border-radius: ${theme.borderRadius("md")};
    background-color: ${theme.colors("dark")};
    color: ${theme.colors("light")};
    font-weight: ${theme.fontWeights("medium")};
    z-index: ${theme.zIndices("tooltip")};
    box-shadow: ${theme.shadows("md")};
  `}
`;

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;
