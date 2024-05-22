import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Config/axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);

  //Promises
  //   const getUsersFn = () => {
  //     fetch("https://dummyjson.com/users")
  //       .then((response) => response.json())
  //       .then((response) => setUsers(response.users));
  //   };

  // Async/Await
  //   const getUsersFn = async () => {
  //     const response = await fetch("https://dummyjson.com/users");
  //     const data = await response.json();
  //     setUsers(data.users);
  //   };

  const getUsersFn = async () => {
    const response = await axiosInstance.get(`users?limit=${limit}&skip=10`);
    console.log(response);
    setUsers(response.data.users);
  };

  useEffect(() => {
    getUsersFn();
  }, [search, limit]);

  return (
    <div className="">
      <div className="flex justify-end p-2">
        <TextField
          placeholder="Search users"
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <TableContainer className="max-h-screen">
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow className="!bg-gray-200">
              <TableCell className="!font-bold">ID</TableCell>
              <TableCell className="!font-bold">Image</TableCell>
              <TableCell className="!font-bold">First Name</TableCell>
              <TableCell className="!font-bold">Last Name</TableCell>
              <TableCell className="!font-bold">Age</TableCell>
              <TableCell className="!font-bold">Gender</TableCell>
              <TableCell className="!font-bold">Email</TableCell>
              <TableCell className="!font-bold">Phone Number</TableCell>
              <TableCell className="!font-bold">Birthdate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.id}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  <img src={user.image} alt="" className="size-10" />
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.firstName}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.lastName}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.age}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.gender}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.email}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.phone}
                </TableCell>
                <TableCell className="!border-b-2 !border-black !border-opacity-35">
                  {user.birthDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-center p-2">
        <Button onClick={() => setLimit(limit + 10)}>Load More</Button>
      </div>
    </div>
  );
};

export default Users;
