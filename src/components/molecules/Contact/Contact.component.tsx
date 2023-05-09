import { Formik, Form } from "formik";
import {
  StyledContactContainer,
  StyledContactFormContainer,
  StyledContactTextArea,
} from "./Contact.styled";
import { TextInput } from "@/components/atoms/TextInput/TextInput.component";
import Layout from "@/components/atoms/Layout/Layout.component";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade delay={500}>
      <StyledContactContainer>
        <Layout>
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
        </Layout>
      </StyledContactContainer>
    </Fade>
  );
};

export default Contact;
