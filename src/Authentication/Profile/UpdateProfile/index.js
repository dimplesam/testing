import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const getProfileFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/profile",
      { params: { token: localStorage.getItem("token") } }
    );
    console.log(response);
    setData(response.data[0]);
  };

  const updateProfileFn = async (values) => {
    console.log(values);
    const response = await axios.put(
      "https://api-eduvila.onrender.com/profile",
      { ...values, id: data?.id }
    );
    if (response) navigate("/profile");
  };

  useEffect(() => {
    getProfileFn();
  }, []);

  console.log(data);

  const initialValues = {
    city: data?.city || "",
    country: data?.country || "",
    dob: data?.dob?.slice(0, 10) || "",
    gender: data?.gender || "",
    name: data?.name || "",
    phone: data?.phone || "",
    profile_url: data?.profile_url || "",
    state: data?.state || "",
    zipcode: data?.zipcode || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      updateProfileFn(values);
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-3 gap-4 p-4"
      >
        <TextField
          name="profile_url"
          label="Profile URL"
          value={formik.values.profile_url}
          onChange={formik.handleChange}
        />
        <TextField
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          name="phone"
          label="phone"
          type="number"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <TextField
          name="dob"
          type="date"
          value={formik.values.dob}
          onChange={formik.handleChange}
        />
        <TextField
          name="gender"
          label="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
        />
        <TextField
          name="country"
          label="country"
          value={formik.values.country}
          onChange={formik.handleChange}
        />
        <TextField
          name="state"
          label="state"
          value={formik.values.state}
          onChange={formik.handleChange}
        />
        <TextField
          name="city"
          label="city"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <TextField
          name="zipcode"
          label="zipcode"
          type="number"
          value={formik.values.zipcode}
          onChange={formik.handleChange}
        />
        <Button variant="contained" type="submit">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UpdateProfile;
