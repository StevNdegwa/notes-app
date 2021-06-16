import styled, { css } from "styled-components";
import { Theme } from "../../../../theme";

export const Wrapper = styled.button`
  display: inline-flex;
  height:${({ theme }: { theme: Theme }) => theme.space(10)};;
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
  &>div.icon{
    width: 30px;
    background-color:transparent;
  }
  ${({ transparent, theme }: { transparent: boolean; theme: Theme }) => css`
    ${transparent && css`
    background-color:${theme.colors("transparent")};
    font-weight:600;
    `}
  `}
`;