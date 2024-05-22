import { Button } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import { toast } from "react-toastify";

const SliderComponent = () => {
  // https://source.unsplash.com/random/900x700/?fruit
  return (
    <>
      <div className="slider-container px-10 bg-gray-400 p-5">
        <Slider
          autoplay
          autoplaySpeed={2000}
          speed={2000}
          slidesToShow={2}
          slidesToScroll={2}
          arrows={true}
          dots
          infinite
        >
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/1"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/2"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/3"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/4"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/900x700/?fruit/5"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <Button onClick={() => toast.error("Message")}>Show Toast</Button>
      <div className="bg-gray-200 relative">
        {/* <svg
          className="mkdf-wavy-effect"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 81.717"
        >
          <path d="M1920,0c0,0-109.246,46.107-316.333,67.334C1343.5,94,1137.095,77.238,999.167,67.5C854,57.25,637.662,24.697,541.709,18.834C375.334,8.666,147,11,0,37.875V0H1920L1920,0z"></path>
        </svg> */}
      </div>
    </>
  );
};

export default SliderComponent;
