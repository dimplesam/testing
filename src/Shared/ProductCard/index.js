import React from "react";
// import productImage from "../../Assets/test.jpg";
const ProductCard = (props) => {
  console.log(props);

  const data = props.p;

  return (
    <div key={data.id} className="flex bg-white flex-col p-2 gap-2">
      <img src={data.imageUrl} alt="" />
      <p className="font-bold">{data.name}</p>
      <p>{data.price}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default ProductCard;
