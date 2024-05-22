import { Button } from "@mui/material";
import React, { useState } from "react";

const Addition = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };
  return (
    <div className="flex flex-col gap-5 items-center h-screen justify-center">
      <p className="text-4xl">{result}</p>
      <div className="flex items-center gap-5">
        <input
          type="number"
          className="border p-2 outline-blue-500"
          placeholder="Enter First"
          value={firstNumber}
          onChange={(e) =>
            e.target.value >= 0 && setFirstNumber(e.target.value)
          }
        />
        <input
          type="number"
          className="border p-2 outline-blue-500"
          placeholder="Enter Second"
          onChange={(e) => setSecondNumber(e.target.value)}
        />
      </div>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default Addition;
