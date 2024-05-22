import { Button } from "@mui/material";
import React from "react";
import { useLocalStorage } from "react-mkx-storage";

const LocalStorage = () => {
  return (
    <div className="flex flex-col  gap-5 bg-gray-200 h-screen items-center justify-center">
      <p>{localStorage.getItem("name")}</p>
      <div className="flex bg-white p-5 gap-5 flex-col">
        <Button onClick={() => localStorage.setItem("name", "Amir")}>
          SetItem
        </Button>
        <Button onClick={() => localStorage.setItem("name2", "Aditya")}>
          Reset Value
        </Button>

        {/* <Button
          onClick={() => {
            localStorage.removeItem("name");
             localStorage.removeItem("name2");
          }}
        >
          Remove Item
        </Button> */}

        <Button
          onClick={() => {
            localStorage.clear();
          }}
        >
          Remove Item
        </Button>
      </div>
    </div>
  );
};

export default LocalStorage;

const SessionStorage = () => {
  //local Storage
  return (
    <div className="flex flex-col  gap-5 bg-gray-200 h-screen items-center justify-center">
      <p>{sessionStorage.getItem("name")}</p>
      <div className="flex bg-white p-5 gap-5 flex-col">
        <Button onClick={() => sessionStorage.setItem("name", "Amir")}>
          SetItem
        </Button>
        <Button onClick={() => sessionStorage.setItem("name2", "Aditya")}>
          Reset Value
        </Button>

        {/* <Button
          onClick={() => {
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("name2");
          }}
        >
          Remove Item
        </Button> */}

        <Button
          onClick={() => {
            sessionStorage.clear();
          }}
        >
          Remove Item
        </Button>
      </div>
    </div>
  );
};

const BrowserStorageByHook = () => {
  const [value, setValue] = useLocalStorage("name", "");
  return (
    <div className="flex flex-col p-2 gap-2">
      <p>{value}</p>
      <Button onClick={() => setValue("Aditya")}>Aditya</Button>
    </div>
  );
};

export { SessionStorage, BrowserStorageByHook };
