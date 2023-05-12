import { Inter } from "next/font/google";
import {
  StyledHeaderContainer,
  StyledHeaderNav,
  StyleHeaderSection,
} from "./Header.styled";
import { Link } from "react-scroll";
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <StyledHeaderContainer className={`${inter.className}`}>
      <StyledHeaderNav>
        <ul>
          <StyleHeaderSection>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              <p>Home</p>
              <span></span>
            </Link>
          </StyleHeaderSection>
          <StyleHeaderSection>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p>About</p>
              <span></span>
            </Link>
          </StyleHeaderSection>
          <StyleHeaderSection>
            <Link
              activeClass="active"
              to="competences"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p>Competences</p>
              <span></span>
            </Link>
          </StyleHeaderSection>
          <StyleHeaderSection>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p>Contact</p>
              <span></span>
            </Link>
          </StyleHeaderSection>
        </ul>
      </StyledHeaderNav>
    </StyledHeaderContainer>
  );
};

export default Header;
