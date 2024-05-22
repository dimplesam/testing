import { LightMode } from "@mui/icons-material";
import React, { useState } from "react";

const LightBulb = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="flex flex-col items-center h-screen gap-5 justify-center p-5">
      <LightMode className="!text-8xl" color={open ? "warning" : "action"} />
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          onChange={(event) => setOpen(event.target.checked)}
        />
        <p>{open ? "Off" : "On"}</p>
      </div>
    </div>
  );
};

export default LightBulb;
