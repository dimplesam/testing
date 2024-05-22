import { Button, TextField } from "@mui/material";
import React from "react";
import { useSessionStorage } from "react-mkx-storage";

const PersistForm = () => {
  const [name, setName] = useSessionStorage("name", "");
  const [phone, setPhone] = useSessionStorage("phone", "");
  const [email, setEmail] = useSessionStorage("email", "");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, phone, email });
    setEmail("");
    setName("");
    setPhone("");
  };
  return (
    <div className="flex flex-col h-screen justify-center bg-gray-200 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-3 gap-4 shadow-lg bg-white"
      >
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default PersistForm;
