import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };
  //Controlled Method

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="flex flex-col gap-5 p-5"
    >
      <TextField
        type="email"
        size="small"
        InputProps={{ className: "!rounded-full" }}
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        type="password"
        size="small"
        InputProps={{ className: "!rounded-full" }}
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button type="submit" variant="contained" className="!rounded-full">
        Submit
      </Button>
    </form>
  );
};

export default SignIn;
