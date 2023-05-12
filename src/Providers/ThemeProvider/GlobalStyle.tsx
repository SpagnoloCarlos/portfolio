import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "@/context/ThemeContext";
import baseTheme from "@/themes/baseTheme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${baseTheme.colors.black};
    color: ${baseTheme.colors.quaternary};
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  h1, h2, h3, h5, h6 {
    margin: 0;
  }
  p {
    line-height: 17px;
    margin: 0;
  }
`;

export default GlobalStyle;
