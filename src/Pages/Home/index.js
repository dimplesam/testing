import React from "react";
import HomeComponent from "../../Components/Home";
import Loader from "../../Loaders";
import HumaraButton from "../../HumaraButton";

const Home = () => {
  const name = "Aditya";
  return (
    <div>
      <Loader />
      <div className="p-2 flex flex-col gap-2">
        <HumaraButton backgroundColor="black">Button 1</HumaraButton>
        <HumaraButton backgroundColor="red">Button 2</HumaraButton>
        <HumaraButton backgroundColor="green">Button 3</HumaraButton>
        <HumaraButton backgroundColor="blue">Button 5</HumaraButton>
      </div>
      <HomeComponent name={name} num={10} />
    </div>
  );
};

export default Home;
