import React, { useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { ShoppingBag, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const Destructuring = () => {
  const state = useState(0);
  //Object
  const car = { type: "Fiat", model: "500", color: "white" };
  const model = "900";
  const { type, model: data, color } = car;

  //Array
  const arr = ["Dimple", "Ayan"];
  const [name1, name2] = arr;

  // console.log(state[0], state[1]);
  return (
    <div>
      {/* <p>Type : {car.type}</p>
      <p>Model : {car.model}</p>
      <p>Color : {car.color}</p> */}
      <p>Type : {type}</p>
      <p>Model : {data}</p>
      <p>Model : {model}</p>
      <p>Color : {color}</p>
      Array Destructuring
      <p>{name1}</p>
      <p>{name2}</p>
      <AccessTimeFilledIcon />
      <ShoppingBag />
      <IconButton>
        <Menu />
      </IconButton>
    </div>
  );
};

export default Destructuring;
