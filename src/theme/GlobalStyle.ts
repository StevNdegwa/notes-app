import { createGlobalStyle } from "styled-components";
import { Theme } from "./index";

const textColor_1 = "hsla(0, 0%, 16%, 1)",
  textColor_0_8 = "hsla(0, 0%, 47%, 1)",
  backgroundColor = "hsla(0, 0%, 100%, 1)";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font: normal 300 16px ${({ theme }: { theme: Theme }) => theme.fonts("body")};
    color: ${textColor_1};
    background-color: ${backgroundColor};
  }
  html,
  body {
    height: 100%;
    position:relative;
  }
  input {
    color: ${textColor_1};
    &::placeholder{
      color: ${textColor_0_8};
    }
  }
  label {
    color: ${textColor_1};
  }
  button {
    color: ${textColor_1};
  }
  a{
    text-decoration:none;
  }
  div#root{
    height: 100%;
  }
`;