import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
const UseEffectDemo2 = () => {
  const [count, setCount] = useState(0);

  const welcomeMessage = () => {
    alert("Count Value Changed");
  };

  useEffect(() => {
    count !== 13 && welcomeMessage();
  }, [count]);

  return (
    <div>
      <p className="text-3xl">{count}</p>
      <div className="flex items-center gap-2">
        <button
          className="bg-green-500 p-2 rounded"
          onClick={() => (count < 10 ? setCount(count + 3) : setCount(count))}
        >
          + Increment
        </button>
        <button
          disabled={count === 0}
          className="bg-red-500 p-2 rounded"
          onClick={() => (count > 0 ? setCount(count - 1) : setCount(count))}
        >
          - Decrement
        </button>
        <button className="bg-gray-500 p-2 rounded" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      {/* <div className="flex flex-col items-center gap-4">
        <Button className="!bg-stone-950" variant="contained">
          Text
        </Button>
        <Button variant="outlined">Text</Button>
        <Button variant="outlined">Text</Button>
        <TextField id="outlined-basic" label="Outlined" variant="filled" />
      </div> */}
    </div>
  );
};

export default UseEffectDemo2;
