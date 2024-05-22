import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      con_password: "",
      address: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is Required")
        .min(2, "Name must be two charecter."),
      email: Yup.string().email().required(),
      phone: Yup.string().required().min(10).max(13),
    }),
    onSubmit: () => {
      console.log(formik.values);
      formik.resetForm();
    },
  });

  // console.log(formik.errors);
  //console.log(formik.isValid);

  const signUpData = [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      name: "con_password",
      label: "Confirm Password",
      type: "password",
    },
    {
      name: "address",
      label: "Address",
      type: "text",
    },
  ];

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 p-5">
      {signUpData.map((input) => {
        return (
          <TextField
            key={input.name}
            size="small"
            type={input.type}
            name={input.name}
            InputProps={{ className: "!rounded-full" }}
            label={input.label}
            error={Boolean(formik.errors[input.name])}
            value={formik.values[input.name]}
            helperText={formik.errors[input.name]}
            onChange={formik.handleChange}
            variant="outlined"
          />
        );
      })}

      <Button
        disabled={formik.isValid}
        type="submit"
        variant="contained"
        className="!rounded-full"
      >
        Submit
      </Button>
    </form>
  );
};

export default SignUp;
