import { Home, Mail, Notifications, Person } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center pr-3 bg-[#4d636f]">
      <div className="flex  items-center">
        <Link className="flex gap-2 hover:bg-white p-3">
          <Home className="!text-white" /> <p className="!text-white">LOGO</p>
        </Link>
        <Link className="hover:bg-white py-3 px-4">
          <Home className="!text-white" />
        </Link>
        <Link className="hover:bg-white py-3 px-4">
          <Person className="!text-white" />
        </Link>
        <Link className="hover:bg-white py-3 px-4">
          <Mail className="!text-white" />
        </Link>
        <Link className="hover:bg-white py-3 px-4">
          <Notifications className="!text-white" />
        </Link>
      </div>
      <div>
        <Avatar
          className="!h-7 !w-7"
          src="https://www.w3schools.com/w3images/avatar2.png"
        />
      </div>
    </div>
  );
};

export default Header;
