import { staticAsset } from "@/utils/urlHelper";
import { StyledAboutContainer, StyledAboutContent } from "./About.styled";
import { Inter, Comic_Neue } from "next/font/google";
import Layout from "@/components/atoms/Layout/Layout.component";
import {
  Fade,
  Hinge,
  Bounce,
  Flip,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from "react-awesome-reveal";

const comic = Comic_Neue({ weight: "700", subsets: ["latin"] });

const About = () => {
  return (
    <Fade delay={500}>
      <StyledAboutContainer>
        <Layout>
          <h1>About me</h1>
          <StyledAboutContent>
            <div>
              <img src={staticAsset("images/pics/about.svg")} alt="About" />
            </div>
            <div>
              <span className={`${comic.className}`}>{"<>"}</span>
              <p>
                I am a full stack web developer with experience in the MERN
                stack. Currently, I work as a front end developer using React.js
                and Next.js for web application development. I love facing new
                challenges and I am committed 100% to every project I work on. I
                consider myself a self-taught person, passionate about
                technology and always looking for new tools and techniques to
                improve my work and offer innovative solutions to my clients.
                Throughout my career, I have had the opportunity to work on
                various projects that have allowed me to gain experience in web
                application development and in the implementation of customized
                solutions for each client. If you are looking for a committed
                and passionate full stack web developer, do not hesitate to
                contact me. I am sure we can work together to take your projects
                to the next level.
              </p>
              <span className={`${comic.className}`}>{"</>"}</span>
            </div>
          </StyledAboutContent>
        </Layout>
      </StyledAboutContainer>
    </Fade>
  );
};

export default About;
