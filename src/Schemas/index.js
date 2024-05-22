import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is Required")
    .min(2, "At least 2 Char")
    .max(10),
  last_name: Yup.string(),
  email: Yup.string().email().required(),
});
