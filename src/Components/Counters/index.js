import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../Redux/Counter";
import { Button } from "@mui/material";

export function Counters() {
  const count = useSelector((i) => i.counter.value);

  const dispatch = useDispatch();

  console.log(count);
  return (
    <div>
      <div className="flex gap-5 justify-center">
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increase 10
        </Button>
      </div>
    </div>
  );
}
