import React, { useContext } from "react";
import { NameContext } from "..";

const Component1 = () => {
  return (
    <div>
      <p>Component1</p>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  const name = useContext(NameContext);
  return (
    <div>
      <p>Component2 :{name}</p>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  return (
    <div>
      <p>Component3</p>
      <Component4 />
    </div>
  );
};

const Component4 = () => {
  const data = useContext(NameContext);
  // console.log(data);
  return (
    <div className="flex gap-2">
      Component4
      {/* Without useContext */}
      {/* <NameContext.Consumer>
        {(name2) => {
          return <p>{name2}</p>;
        }}
      </NameContext.Consumer> */}
      {/* With useContext */}
      <p>{data}</p>
    </div>
  );
};

export default Component1;
