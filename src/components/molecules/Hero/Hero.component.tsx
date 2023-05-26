import { staticAsset } from "@/utils/urlHelper";
import {
  StyledHeroContainer,
  StyledHeroDescription,
  StyledHeroImage,
} from "./Hero.styled";
import Layout from "@/components/atoms/Layout/Layout.component";
import Image from "next/image";

const Hero = () => {
  return (
    <StyledHeroContainer id="hero">
      <Layout>
        <StyledHeroDescription>
          <h1>Hi 👋 I&apos;m Carlos Andr&eacute;s Spagnolo</h1>
          <p>I&apos;m a Full Stack Web Programmer oriented to the MERN stack</p>
        </StyledHeroDescription>
        <StyledHeroImage>
          <Image
            src={staticAsset("images/pics/image_hero.png")}
            alt="Spagnolo Carlos"
            width={400}
            height={400}
          />
        </StyledHeroImage>
      </Layout>
    </StyledHeroContainer>
  );
};

export default Hero;
