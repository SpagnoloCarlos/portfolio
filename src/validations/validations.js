import * as Yup from "yup";

export const contactFormValidation = Yup.object().shape({
  name: Yup.string().required("The name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("The email is required"),
  message: Yup.string().required("The message is required"),
});
