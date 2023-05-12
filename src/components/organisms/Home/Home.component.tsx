import About from "@/components/molecules/About/About.component";
import Competences from "@/components/molecules/Competences/Competences.component";
import Contact from "@/components/molecules/Contact/Contact.component";
import Hero from "@/components/molecules/Hero/Hero.component";
import { StyledHomeContainer } from "./Home.styled";
import ParticleBackground from "react-particle-backgrounds";

const Home = () => {
  const settings = {
    particle: {
      particleCount: 130,
      color: "#d68c38",
      minSize: 2,
      maxSize: 4,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 30,
      minSpeed: 0.2,
      maxSpeed: 4,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 5000,
    },
  };
  return (
    <StyledHomeContainer>
      <ParticleBackground settings={settings} />

      <Hero />
      <About />
      <Competences />
      <Contact />
    </StyledHomeContainer>
  );
};

export default Home;
