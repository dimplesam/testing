import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getProductsFn = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setData(res.products);
      });
  };

  useEffect(() => {
    getProductsFn();
  }, []);

  return (
    <div className="bg-gray-200 p-2 gap-5 grid grid-cols-4">
      {/* {dummyProducts.map((item) => {
        return <ProductCard p={item} />;
      })} */}
      {data.map((product) => {
        return (
          <div
            key={product.id}
            className=" bg-white p-2 rounded-xl"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.thumbnail}
              alt=""
              className="h-40 object-cover w-full"
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p className="text-green-500">{product.discountPercentage}%</p>
            <Rating name="read-only" value={product.rating} readOnly />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
