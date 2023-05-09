import About from "@/components/molecules/About/About.component";
import Competences from "@/components/molecules/Competences/Competences.component";
import Contact from "@/components/molecules/Contact/Contact.component";
import Hero from "@/components/molecules/Hero/Hero.component";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Competences />
      <Contact />
    </>
  );
};

export default Home;
