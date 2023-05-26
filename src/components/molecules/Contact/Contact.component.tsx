import { Formik, Form } from "formik";
import {
  StyledContactButton,
  StyledContactButtonContainer,
  StyledContactContainer,
  StyledContactFormContainer,
  StyledContactMessage,
  StyledContactTextArea,
} from "./Contact.styled";
import { TextInput } from "@/components/atoms/TextInput/TextInput.component";
import Layout from "@/components/atoms/Layout/Layout.component";
import { submitForm } from "@/services/app.services";
import { contactFormValidation } from "@/validations/validations";
import Spin from "@/components/atoms/Spin/Spin.component";
import { useState } from "react";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <StyledContactContainer id="contact">
      <Layout>
        <div>
          <h1>Contact</h1>
          <StyledContactFormContainer>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={contactFormValidation}
              validateOnBlur={false}
              validateOnChange={validated}
              onSubmit={async (values) => {
                setLoading(true);
                const response = await submitForm(values);
                console.log(response?.["ok"]);
                setLoading(false);
                if (response?.["ok"]) {
                  setMessage("Your message has been sent successfully ✔");
                } else {
                  setMessage(
                    "An error occurred while sending the message. Please try again"
                  );
                }
              }}
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
                  <Form onSubmit={handleSubmit} noValidate>
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
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        labelName="Your email"
                        placeholder=""
                        error={errors.email}
                        required
                      />
                    </div>
                    <StyledContactTextArea
                      invalid={errors.message ? true : false}
                    >
                      <label htmlFor="text">Your message</label>
                      <textarea
                        name="message"
                        id="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                      ></textarea>
                      <span>{errors.message}</span>
                    </StyledContactTextArea>
                    <StyledContactButtonContainer>
                      <StyledContactButton
                        type="submit"
                        onClick={() => (loading ? {} : setValidated(true))}
                      >
                        {loading ? <Spin /> : "Send"}
                      </StyledContactButton>
                      <StyledContactMessage>{message}</StyledContactMessage>
                    </StyledContactButtonContainer>
                  </Form>
                );
              }}
            </Formik>
          </StyledContactFormContainer>
        </div>
      </Layout>
    </StyledContactContainer>
  );
};

export default Contact;
