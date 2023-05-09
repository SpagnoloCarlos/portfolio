import { StyledLayoutContainer } from "./Layout.styled";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default Layout;
