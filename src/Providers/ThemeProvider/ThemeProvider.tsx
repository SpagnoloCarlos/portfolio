import { ThemeContext } from "@/context/ThemeContext";
import baseTheme from "@/themes/baseTheme";
import { useContext } from "react";
import {
  createGlobalStyle,
  ThemeProvider as Provider,
} from "styled-components";

const ThemeProvider = ({ children }: any) => {
  const { theme } = useContext(ThemeContext);

  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${
      theme === "light" ? baseTheme.colors.quaternary : baseTheme.colors.black
    };
    color: ${
      theme === "light" ? baseTheme.colors.black : baseTheme.colors.quaternary
    };
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
  return (
    <Provider theme={baseTheme}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
