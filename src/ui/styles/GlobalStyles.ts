import { createGlobalStyle, css } from "styled-components";
import WebFont from "webfontloader";
import { ThemeType } from "../theme/themeFn";

const textColor_1 = "hsla(0, 0%, 16%, 1)",
  textColor_0_8 = "hsla(0, 0%, 47%, 1)";

WebFont.load({
  google: {
    families: ["Roboto"]
  }
})


export const GlobalStyle = createGlobalStyle`
${({ theme }: { theme: ThemeType }) => css`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 200ms, color 100ms;
    scrollbar-width:thin;
    scrollbar-color: ${theme.colors.grey[4]};
  }
  body {
    font: normal 300 16px ${theme.fontFamilies.main};
    background-color:${theme.colors.light};
    color: ${theme.colors.dark};
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
    color:inherit;
  }
  ::-webkit-scrollbar{
    width:5px;
    background:transparent;
  } 
  ::-webkit-scrollbar-track{
    border-radius:10px;
  }
  ::-webkit-scrollbar-thumb{
    background:${theme.colors.grey[4]};
  }
`};
`;