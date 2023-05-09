import { Inter } from "next/font/google";
import { StyledHeaderContainer, StyledHeaderNav } from "./Header.styled";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <StyledHeaderContainer className={`${inter.className}`}>
      <StyledHeaderNav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Competences</li>
          <li>Contact</li>
        </ul>
      </StyledHeaderNav>
    </StyledHeaderContainer>
  );
};

export default Header;
