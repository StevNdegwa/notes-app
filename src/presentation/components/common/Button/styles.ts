import styled, { css } from "styled-components";
import { ThemeType } from "../../../../ui/theme";


export const Wrapper = styled.button`
  ${({ transparent, theme, primary, secondary }: { theme: ThemeType; transparent: boolean; primary: boolean; secondary: boolean; }) => css`
  display: inline-flex;
  background-color:hsla(0, 0%, 85%, 1);
  font-weight:500;
  font-size:1rem;
  border:none;
  cursor:pointer;
  padding:0 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover{
      box-shadow:0px 0px 2px hsla(0, 0%, 65%, 1);
  }
  & > div.label {
    width: 100%;
  }
  & > div {
    height: 100%;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes load { 
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg);
    }
  }
  &>div.icon{
    width: 30px;
    background-color:transparent;
    &.spin{
      animation:load 1s linear infinite;
    }
  }
  height: ${theme.space[10]};
  font-weight:600;
  border-radius:${theme.borderRadius.sm};
    
  ${transparent && css`
    background-color:${theme.colors.transparent};
    color:${theme.button.backgroundColor};
  `}
  ${primary && css`
    background-color:${theme.button.backgroundColor};
    color:${theme.button.color};
  `}
  ${secondary && css`
    background-color:${theme.colors.secondary[5]};
    color:${theme.button.color};
  `}
  &:disabled{
    color:${theme.colors.grey[1]};
    cursor:not-allowed;
  }
`}
`;