import React, { useState } from "react";

const UseStateDemo = () => {
  const [state, setState] = useState(
    "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_Imported_Lovepuzzle/72c09193-ab0f-43a9-801e-593dba6b45bd.__SX2375__SY1336.25__QL60__._TTH_.jpeg"
  );

  console.log(state);
  return (
    <div className="flex flex-col gap-2 p-5">
      <img src={state} alt="" />
      {/* <p>{state}</p> */}
      <button
        onClick={() =>
          setState(
            "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_FB_dehatis2_V1/7ed7ae87-008e-48d0-97d7-71b7e3a1016f.__SX2375__SY1336.25__QL60__._TTH_.jpeg"
          )
        }
      >
        Click
      </button>
      {/* <p>{state}</p> */}
      <button
        onClick={() =>
          setState(
            "https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_FB_CrushedS4_v1/1b140383-ff04-4818-bf63-97346a11379c.__SX2375__SY1336.25__QL60__._TTH_.jpeg"
          )
        }
      >
        Click 2
      </button>
    </div>
  );
};

export default UseStateDemo;
