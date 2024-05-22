import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // https://api-eduvila.onrender.com/register
  //   https://api-eduvila.onrender.com/login
  //   email: "mohdamirkhan696@gmail.com";
  //   password: "123456";

  //https://api-eduvila.onrender.com/profile

  const navigate = useNavigate();
  const loginFn = async (email, password) => {
    const response = await axios.post(
      "https://api-eduvila.onrender.com/login",
      { email: email, password: password }
    );
    console.log(response.data);
    localStorage.setItem("token", response.data[0].token);
    localStorage.setItem("name", response.data[0].name);
    localStorage.setItem("user_id", response.data[0].id);
    alert(response.data);
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {
      console.log(formik.values);
      loginFn(formik.values.email, formik.values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-10 flex flex-col gap-4">
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
      <p>you dont have any account create an account</p>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default Login;
