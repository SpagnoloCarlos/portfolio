import ThemeProvider from "./ThemeProvider/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
