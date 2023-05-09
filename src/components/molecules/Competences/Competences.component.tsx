import { staticAsset } from "@/utils/urlHelper";
import {
  StyledCompetencesContainer,
  StyledCompetencesLogos,
} from "./Competences.styled";
import Card from "@/components/atoms/Card/Card.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "@/components/atoms/Layout/Layout.component";
import { Fade } from "react-awesome-reveal";

const Competences = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1140 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const items = [
    {
      icon: "images/logos/react.png",
      title: "React",
      description:
        "is an open-source JavaScript library used to build interactive and scalable user interfaces. It focuses on creating reusable components and efficient state updates, which enables greater efficiency and speed in the development of dynamic web applications.",
    },
    {
      icon: "images/logos/nextjs.png",
      title: "Next.js",
      description:
        "is a React-based framework that makes it easy to build high-performance web applications with features such as server-side rendering, automatic code splitting, and static site generation. It has a rich plugin system and is popular for building modern web applications.",
    },
    {
      icon: "images/logos/styled-component.png",
      title: "Styled Component",
      description:
        "is a CSS-in-JS library used to style React components. It lets developers write CSS in JavaScript files, supports dynamic styling, and offers an easy way to create reusable styles.",
    },
    {
      icon: "images/logos/html.png",
      title: "HTML",
      description:
        "is the standard language for creating web pages. It defines the structure and content of web pages using tags and attributes.",
    },
    {
      icon: "images/logos/css.png",
      title: "CSS",
      description:
        "is a language used to style HTML or XML web pages, controlling the appearance of fonts, colors, layout, and other visual elements.",
    },
    {
      icon: "images/logos/js.png",
      title: "Javascript",
      description:
        "is a programming language used to create interactive web pages. It runs on the user's web browser and enables developers to add interactivity, animations, and other functionality to web pages.",
    },
    {
      icon: "images/logos/node.png",
      title: "Node.js",
      description:
        "is a JavaScript runtime environment that allows developers to run JavaScript on the server-side. It is lightweight, efficient, and enables the creation of scalable web applications using JavaScript.",
    },
    {
      icon: "images/logos/express.png",
      title: "Express.js",
      description:
        "is a lightweight framework for building web applications and APIs using Node.js. It provides a flexible and simple way to handle HTTP requests and perform common web development tasks.",
    },
    {
      icon: "images/logos/mongo.jpg",
      title: "MongoDB",
      description:
        "is a NoSQL database that stores data in flexible, JSON-like documents. It is scalable, supports high availability, and is used for building modern web applications.",
    },
  ];

  return (
    <Fade delay={500}>
      <StyledCompetencesContainer>
        <Layout>
          <h1>Competences</h1>
          <StyledCompetencesLogos>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              arrows={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              keyBoardControl={true}
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              itemClass="carousel-item-style"
              dotListClass="custom-dot-list-style"
              renderArrowsWhenDisabled={true}
            >
              {items.map(({ icon, title, description }) => (
                <Card
                  icon={staticAsset(icon)}
                  title={title}
                  description={description}
                />
              ))}
            </Carousel>
          </StyledCompetencesLogos>
        </Layout>
      </StyledCompetencesContainer>
    </Fade>
  );
};

export default Competences;
