import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { ThemeType } from "../../../../ui/theme";

export const SelectWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  position: relative;
`;

export const SelectIcon = styled(motion.span)`
  position: absolute;
  ${({ theme }: { theme: ThemeType }) => css`
    line-height: ${theme.space[10]};
    font-size: ${theme.fontSizes.lg};
    right: ${theme.space[3]};
  `}
`;

export const OptionsList = styled(motion.ul)`
  position: absolute;
  top: 110%;
  width: 100%;
  overflow: hidden;
  list-style-type: none;
  background-color: white;
  ${({ theme }: { theme: ThemeType }) => css`
    z-index: ${theme.zIndices.popover};
    background-color: ${theme.colors.light};
    border-radius: ${theme.borderRadius.md};
    box-shadow: 0px 3px 3px ${theme.colors.grey[3]};
    & > li {
      text-align: left;
      cursor: pointer;
      margin: ${theme.space[1]};
      padding: ${theme.space[1]};
      border-radius: ${theme.borderRadius.sm};
      color: ${theme.colors.primary[6]};
      background-color: transparent;
      transition: background-color 100ms;
      &:hover, &[aria-selected="true"] {
        background-color: ${theme.colors.grey[0]};
        box-shadow: 0px 0px 2px ${theme.colors.grey[1]};
      }
    }
  `}
`;
