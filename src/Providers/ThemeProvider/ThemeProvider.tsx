import baseTheme from "@/themes/baseTheme";
import { ThemeProvider as Provider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const ThemeProvider = ({ children }: any) => {
  return (
    <Provider theme={baseTheme}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
