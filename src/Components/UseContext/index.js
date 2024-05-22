import React, { createContext } from "react";
import Component1 from "./Component";
export const NameContext = createContext();
const UseContext = () => {
  const name = "Amir";
  return (
    <div>
      <p>Main Component</p>
      <NameContext.Provider value={name}>
        <Component1 />
      </NameContext.Provider>
    </div>
  );
};

export default UseContext;
