import { Formik, Form } from "formik";
import {
  StyledContactContainer,
  StyledContactFormContainer,
  StyledContactTextArea,
} from "./Contact.styled";
import { TextInput } from "@/components/atoms/TextInput/TextInput.component";
import Layout from "@/components/atoms/Layout/Layout.component";
import { Fade } from "react-awesome-reveal";
import ParticleBackground from "react-particle-backgrounds";

const Contact = () => {
  const settings = {
    particle: {
      particleCount: 100,
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
    <StyledContactContainer id="contact">
      {/* <ParticleBackground settings={settings} /> */}
      <Layout>
        <Fade delay={500}>
          <div>
            <h1>Contact</h1>
            <StyledContactFormContainer>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validateOnBlur={false}
                validateOnChange={true}
                onSubmit={() => {}}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                  isSubmitting,
                }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <TextInput
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          labelName="Your name"
                          placeholder=""
                          error={errors.name}
                          required
                        />
                        <TextInput
                          id="email"
                          name="email"
                          type="text"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          labelName="Your email"
                          placeholder=""
                          error={errors.email}
                          required
                        />
                      </div>
                      <StyledContactTextArea>
                        <label htmlFor="text">Your message</label>
                        <textarea name="text" id="text" rows={5}></textarea>
                      </StyledContactTextArea>
                    </Form>
                  );
                }}
              </Formik>
            </StyledContactFormContainer>
          </div>
        </Fade>
      </Layout>
    </StyledContactContainer>
  );
};

export default Contact;
