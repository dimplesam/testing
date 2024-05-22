import React from "react";

const Component1 = ({ name }) => {
  // // console.log(props);
  // const { name } = props;
  return (
    <div>
      <p>Component1 : {name}</p>
      <Component2 name={name} />
    </div>
  );
};

const Component2 = ({ name }) => {
  return (
    <div>
      <p>Component2 : {name}</p>
      <Component3 name={name} />
    </div>
  );
};

const Component3 = ({ name }) => {
  return (
    <div>
      <p> Component3 : {name}</p>
    </div>
  );
};

export { Component1 };
