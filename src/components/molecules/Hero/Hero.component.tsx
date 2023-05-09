import { staticAsset } from "@/utils/urlHelper";
import {
  StyledHeroContainer,
  StyledHeroDescription,
  StyledHeroImage,
} from "./Hero.styled";
import Layout from "@/components/atoms/Layout/Layout.component";

const Hero = () => {
  return (
    <StyledHeroContainer>
      <Layout>
        <StyledHeroDescription>
          <h1>Hi 👋 I'm Carlos Andrés Spagnolo</h1>
          <p>I'm a Full Stack Web Programmer oriented to the MERN stack</p>
        </StyledHeroDescription>
        <StyledHeroImage>
          <img
            src={staticAsset("images/pics/image_hero.png")}
            alt="Spagnolo Carlos"
          />
        </StyledHeroImage>
      </Layout>
    </StyledHeroContainer>
  );
};

export default Hero;
