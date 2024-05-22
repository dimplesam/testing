import { Avatar, Button, Dialog, Divider, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../Authentication/SignIn";
import SignUp from "../../Authentication/SignUp";

const HomeComponent = ({ num }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("SignUp");
  //Menu for Profile Information
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  console.log(isOpen);

  const navigate = useNavigate();
  // console.log(i.name);
  // console.log(i.num);
  // const obj = { name2: "Amir", num2: 12 };

  // const { name, num } = i;

  // console.log(name, num);
  // console.log(localStorage.getItem("token"));
  // console.log(localStorage.getItem("name"));

  //Get User Data from LocalStorage
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  // console.log(name2);
  // console.log(num2);
  // console.log(name);
  // console.log(num);

  //Logut User and Clear The Local Storage
  const handleLogout = () => {
    localStorage.clear();
    setAnchorEl(null);
  };

  return (
    <div className="h-full">
      <div className="flex justify-between gap-5 p-2 items-center bg-black text-white px-5">
        <div className="flex gap-5 items-center">
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
          <button className="hover:bg-white hover:text-black p-2">Logo</button>
        </div>
        {/* Condion of is Login */}
        {token ? (
          <Avatar
            src="jgjg"
            alt={name}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          />
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
      <div className="flex h-[95vh]">
        <div className="w-[10%] flex flex-col h-full bg-gray-200">
          <p className="p-3">Menu</p>
          <Link
            to="/courses-list"
            className="hover:bg-black p-2 w-full hover:text-white"
          >
            Cources
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
          <Link className="hover:bg-black p-2 w-full hover:text-white">
            Link 1
          </Link>
        </div>
        <div className="w-[90%] h-full overflow-y-auto">
          {[1, 2, 3, 4, 5, 6, 65, 4, 5, 8].map(() => (
            <div className="flex ">
              <div className="w-[60%] p-5">
                <p className="text-xl font-bold">Heading</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex p-5 w-[40%] gap-5 flex-col">
                <div className="h-24 flex justify-center items-center border-2">
                  AD
                </div>
                <div className="h-40 flex justify-center items-center border-2">
                  AD
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5">
        {/* <iframe src="https://www.flipkart.com/"></iframe> */}

        {/* <video
          controls={false}
          autoPlay
           src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ></video> */}
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="w-96">
          <div className="flex h-10">
            <Button
              color={page === "SignUp" ? "success" : "primary"}
              className="!w-full"
              onClick={() => setPage("SignUp")}
            >
              Sign Up
            </Button>
            <div className="h-full border" />
            <Button
              color={page === "SignIn" ? "success" : "primary"}
              className="!w-full"
              onClick={() => setPage("SignIn")}
            >
              Sign In
            </Button>
          </div>
          <Divider />
          {/* {page === "SignUp" ? <SignUp /> : <SignIn />} */}
          {page === "SignUp" && <SignUp />}
          {page === "SignIn" && <SignIn />}
        </div>
      </Dialog>
      {/* Menu for Profile Information */}
      <Menu anchorEl={anchorEl} open={isOpen} onClose={() => setAnchorEl(null)}>
        <MenuItem className="!flex !flex-col gap-2">
          <Avatar src="guygliu" alt={name} />
          <p>{name}</p>
        </MenuItem>
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default HomeComponent;
