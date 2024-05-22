import React from "react";

const ArrayMapDemo = () => {
  const arrOfObj = [
    { name: "Amir" },
    { name: "Dimple" },
    { name: "Jyoti" },
    { name: "Pankaj" },
    { name: "Ayan" },
    { name: "Mani" },
  ];

  const arrOfNum = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {/* <p>{arrOfObj[0].name}</p>
      <p>{arrOfObj[1].name}</p>
      <p>{arrOfObj[2].name}</p>
      <p>{arrOfObj[3].name}</p>
      <p>{arrOfObj[4].name}</p> */}

      {/* {arrOfObj.map((obj) => (
        <p>{obj.name} </p>
      ))} */}

      {arrOfObj.map((obj) => (
        <p>Amir</p>
      ))}

      {arrOfNum.map((num, index) => {
        return <p key={index}>{num}</p>;
      })}
    </div>
  );
};

export default ArrayMapDemo;
