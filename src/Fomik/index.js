import { Button, Checkbox, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { signUpValidationSchema } from "../Schemas";

const FormikDemo = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      agree: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: () => {
      console.log(formik.values);
    },
  });

  // const user = { name: "Kuch", designation: "Frontend Developer" };

  // send { name:"Kuch", designation: "Frontend Developer" }

  console.log(formik.errors, "formik.errors");

  console.log(formik.errors.first_name);
  return (
    <form onSubmit={formik.handleSubmit} className="flex h-screen">
      <img src="https://source.unsplash.com/random" alt="" className="w-1/2" />

      <div className="flex flex-col justify-center gap-5 p-16 w-1/2">
        <p className="text-center">Sign Up Page</p>
        <div className="grid grid-cols-2 gap-5">
          <TextField
            size="small"
            name="first_name"
            label="First Name"
            error={formik.errors.first_name}
            placeholder="Enter First Name"
            helperText={formik.errors.first_name}
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            name="last_name"
            label="Last Name"
            placeholder="Enter Last Name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            className="col-span-2"
            name="email"
            label="Email"
            error={formik.errors.email}
            helperText={formik.errors.email}
            placeholder="Enter Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            name="password"
            label="Password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <TextField
            size="small"
            name="phone"
            label="Phone Number"
            placeholder="Enter Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
        <span className="flex gap-1 items-center">
          <Checkbox
            name="agree"
            value={formik.values.agree}
            onChange={formik.handleChange}
          />
          I Agree
        </span>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormikDemo;
