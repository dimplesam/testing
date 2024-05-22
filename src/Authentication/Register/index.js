import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // https://api-eduvila.onrender.com/register
  //   https://api-eduvila.onrender.com/login
  //   email: "mohdamirkhan696@gmail.com";
  //   password: "123456";
  const navigate = useNavigate();
  const registerFn = async (name, email, password) => {
    const response = await axios.post(
      "https://api-eduvila.onrender.com/register",
      { name: name, email: email, password: password }
    );
    console.log(response.data);

    alert(response.data);
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
      registerFn(
        formik.values.name,
        formik.values.email,
        formik.values.password
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-10">
      <TextField
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Register;
