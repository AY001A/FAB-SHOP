import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId, title } = useParams();

  return <div>product page for {title} </div>;
};

export default ProductPage;
