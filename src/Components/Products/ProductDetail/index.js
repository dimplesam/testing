import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const { product_id } = useParams();

  const getProductFn = async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/${product_id}`
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getProductFn();
  }, []);

  console.log(data);
  return (
    <div>
      <img src={data?.thumbnail} alt="" />
      <p>{data?.title}</p>
    </div>
  );
};

export default ProductDetail;
