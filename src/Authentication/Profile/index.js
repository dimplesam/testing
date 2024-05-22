import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // https://api-eduvila.onrender.com/profile
  const [data, setData] = useState({});
  const token = localStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();
  const getProfileFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/profile",
      { params: { token: token } }
    );
    console.log(response.data[0]);
    setData(response.data[0]);
  };

  useEffect(() => {
    getProfileFn();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex gap-2 flex-col p-4">
      <img src={data?.profile_url} alt="" className="rounded" />
      <p>{data?.name}</p>
      <p>{data?.id}</p>
      <p>{data?.gender}</p>
      <p>{data?.zipcode}</p>
      <p>{data?.dob?.slice(0, 10)}</p>
      <p>{data?.country}</p>
      <p>{data?.state}</p>
      <p>{data?.city}</p>
      <p>{data?.phone}</p>
      <p>{data?.city}</p>
      <div className="flex w-full">
        <Button onClick={() => navigate("/update-profile")}>
          Update Profile
        </Button>
        <Button onClick={() => handleLogout()}>Logout</Button>
      </div>
    </div>
  );
};

export default Profile;
