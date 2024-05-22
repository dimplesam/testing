import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const [textColor, setTextColor] = useState("black");

  const colors = ["red", "blue", "yellow", "green", "grey"];
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex flex-col gap-5 min-h-screen justify-center items-center"
    >
      <p className="text-3xl" style={{ color: textColor }}>
        {count}
      </p>
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
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          {colors.map((i) => {
            return (
              <button
                key={i}
                style={{ background: i }}
                onClick={() => setColor(i)}
              >
                {i}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          {colors.map((i) => {
            return (
              <button
                key={i}
                style={{ background: i }}
                onClick={() => setTextColor(i)}
              >
                {i}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Counter;
