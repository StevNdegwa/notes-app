import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";

export const RadioWrapper = styled.div`
  height: 40px;
  position: relative;
  padding-left: 30px;
`;

export const RadioInput = styled.input`
${({ theme }: { theme: ThemeType }) => css`
  position: absolute;
  width:20px;
  height:20px;
  left: 0;
  top: 0.5rem;
  opacity: 0;
  cursor: pointer;
  &:checked + div {
    color: ${theme.colors.primary[5]};
    background-color:white;
    &:focus + div {
      box-shadow: 0px 0px 3px ${theme.colors.secondary[2]};
    }
  }

  &:focus + div {
    box-shadow: 0px 0px 3px ${theme.colors.secondary[2]};
    border: 2px solid ${theme.colors.secondary[5]};
  }
  &:disabled + div {
    background-color: ${theme.colors.secondary[1]};
    border-color: ${theme.colors.secondary[1]};
  }
  &:disabled:not(:checked) + div {
    color: ${theme.colors.secondary[1]};
  }
`}
`;

export const RadioLabel = styled.label`
  line-height: 40px;
  color:inherit;
`;

export const RadioIcon = styled.div`
  ${({ invalid, theme }: { invalid: boolean; theme: ThemeType }) => css`
    z-index: 2;
    width: 20px;
    height: 20px;
    overflow: hidden;
    font-size: 0.8rem;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    border: 1px solid ${theme.colors.grey[4]};
    color: ${theme.colors.grey[1]};
    background-color: ${theme.colors.grey[1]};
    transition: background-color 100ms;
    ${invalid &&
    css`
      color: white;
      border-color: ${theme.colors.error[5]};
    `}
  `}
`;
